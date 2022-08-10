# Performance and transactions/accounts cost

## Metrics

There are 3 performance metrics of Solana programs:

1. Accounts space.
The less space you occupy, the less you pay for storage.
2. Binary size (executable account space).
The less program object file takes, the less you pay for deployment.
3. Compute units (CU).
Your goal is to fit in 200k CU per transaction,
otherwise you have to pay additional fee.

## Calculating cost

Use `solana rent <BYTES>` to calculate space price.
Currently it's about 7.3 SOL per MB.

Transaction fees are just 5000 lamports per signature.

## Compiler options

Anchor ships these default options in project workspace `Cargo.toml`:

```toml
[profile.release]
overflow-checks = true
lto = "fat"
codegen-units = 1
[profile.release.build-override]
opt-level = 3
incremental = false
codegen-units = 1
```

### LTO (Link Time Optimization)

`lto = "fat"`, which is equivalent to `lto = true`, is quite important.
It may improve performance and decrease binary size,
but comes with increased compilation time.
It is recommended to use it when deploying.

### opt-level={s,z}

There is another option, `opt-level = "z"`.
It may reduce binary size by about 10%, but also degrade performance by about 50%.
`opt-level = "s"` may be half as strong.

Also, this flag may resolve stack size issues.

## Vec vs array

It is generally recommended to use arrays to store in accounts.

## Zero copy deserialization

Using `#[account(zero_copy)]` and `AccountLoader`
instead of `#[account]` and `Account`
makes it so data is not copied to a new struct using borsh
but instead taken from account's `data` field directly using casting.

This is useful when dealing with large accounts to save stack space.

By default `zero_copy` uses `#[repr(C)]`, which may increase `data`
space and break client-side deserialization due to alignment.
It doesn't happen when each field has size of 8*N bytes, for example: 

```rust,ignore
#[account(zero_copy)]
struct User {
    pub authority: Pubkey,
    pub balance: u64,
    pub name: [u8; 24],
}
```

To avoid the `#[repr(C)]` issues, you can use `#[repr(packed)]`
along with `zero_copy`. However, it may potentially cause UB
(see [rust-lang#82523](https://github.com/rust-lang/rust/issues/82523)).

When using `zero_copy`, there is no need to use a LEN const like so:

```rust,ignore
#[account(init, space = 8 + T::LEN)]
```

You can just use `size_of`:

```rust,ignore
#[account(init, space = 8 + std::mem::size_of::<T>())]
```
