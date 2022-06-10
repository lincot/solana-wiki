# Performance and transactions/account cost

## Metrics

There are 3 performance metrics of Solana programs:

1. Account space.
The less space you occupy, the less you pay for storage.
2. Binary size.
The less program's object file takes, the less you pay for deployment.
3. Compute units (CU).
Your goal is to fit in 200k CU per transaction,
otherwise you have to pay additional fee.

## Calculating cost

Use `solana rent <BYTES>` to calculate space price.
Currently it's about 7.3 SOL per MB.

Transaction fee is 5000 lamports per signature, which is quite low.

## Compiler options

### LTO (Link Time Optimization)

Newer anchor versions will ship these options in project workspace `Cargo.toml`:

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

### opt-level=z

There is another option, `opt-level = "z"`.
It may reduce binary size by about 10%, but also degrade performance by about 1.5x.

## Vec vs slice

TODO

## Benchmarking

TODO
