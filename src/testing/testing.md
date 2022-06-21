# Testing

## Before you dump

Add this to `Anchor.toml` (with needed url):

```toml
[test.validator]
url = "https://api.devnet.solana.com"
```

## Dumping an account (e.g. a program) to localnet

Add this to `Anchor.toml`:

```toml
[[test.validator.clone]]
address = "$ACCOUNT_ADDRESS"
```

## Dumping a mint to localnet

Execute this to download the mint and change its authority to self.

```sh
MINT_ADDRESS=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
TOKEN_NAME=USDC
CLUSTER=m
MINT_AUTHORITY=$(solana address)

mkdir -p tests/accounts
solana account $MINT_ADDRESS --output json -o tests/accounts/$TOKEN_NAME.json -u $CLUSTER >/dev/null

node -e "
const bs58 = require('bs58');
const bs64 = require('base64-js');
const fs = require('fs');
const mint = require('./tests/accounts/$TOKEN_NAME.json');

let data = bs64.toByteArray(mint['account']['data'][0]);
const authority = bs58.decode('$MINT_AUTHORITY');
data = Buffer.concat([data.slice(0, 4), authority, data.slice(4 + 32)]);
mint['account']['data'][0] = bs64.fromByteArray(data);

fs.writeFile('tests/accounts/$TOKEN_NAME.json', JSON.stringify(mint), 'utf8', (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
"
```

Then add this to `Anchor.toml`:

```toml
[[test.validator.account]]
address = "$MINT_ADDRESS"
filename = "tests/accounts/$TOKEN_NAME.json"
```
