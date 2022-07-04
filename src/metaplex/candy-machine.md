# Candy Machine

Candy Machine's mint instruction is impossible to use in other programs, since
it is not allowed to invoke it using CPI or to have "suspicious" instructions
in the same transaction.

Also, it will "punish" you for 0.01 SOL when doing anything wrong,
e.g. trying to mint when there's no NFT left or before the start date.
The instruction won't fail, of course.
