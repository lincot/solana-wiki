# Mocha configuration

You can use this configuration in `Anchor.toml`:

```toml
[scripts]
test = "yarn ts-mocha -p ./tsconfig.json --no-timeouts --slow 0 --exit tests/**/*.ts"
```

- `--no-timeouts` to disable test timeouts
- `--slow 0` to show elapsed time for all tests, even slow ones
- `--exit` to force exit after tests to avoid process hanging
