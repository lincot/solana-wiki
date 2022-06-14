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

### LTO (Link Time Optimization)

Newer anchor releases will ship these options in project workspace `Cargo.toml`:

```toml
[profile.release]
lto = "fat"
codegen-units = 1
[profile.release.build-override]
opt-level = 3
incremental = false
codegen-units = 1
```

Out of them, `lto = "fat"`, which is equivalent to `lto = true`, is the main one.
It may improve performance and decrease binary size,
but comes with increased compilation time.
It is recommended to use it when deploying.

### opt-level={s,z}

There is another option, `opt-level = "z"`.
It may reduce binary size by about 10%, but also degrade performance by about 50%.
`opt-level = "s"` may be half as strong.

## Vec vs array

It is generally recommended to use arrays to store in accounts.
