# mocha configuration

To disable test timeouts and show elapsed time of fast tests,
add this to `Anchor.toml`:

```toml
[scripts]
test = "yarn run ts-mocha -p ./tsconfig.json --no-timeouts -s 0 tests/**/*.ts"
```