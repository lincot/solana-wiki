Object.assign(window.search, {"doc_urls":["introduction/introduction.html#introduction","performance/performance.html#performance-and-transactionsaccounts-cost","performance/performance.html#metrics","performance/performance.html#calculating-cost","performance/performance.html#compiler-options","performance/performance.html#lto-link-time-optimization","performance/performance.html#opt-levelsz","performance/performance.html#vec-vs-array","performance/performance.html#zero-copy-deserialization"],"index":{"documentStore":{"docInfo":{"0":{"body":8,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":4,"title":3},"2":{"body":39,"breadcrumbs":2,"title":1},"3":{"body":19,"breadcrumbs":3,"title":2},"4":{"body":0,"breadcrumbs":3,"title":2},"5":{"body":44,"breadcrumbs":5,"title":4},"6":{"body":17,"breadcrumbs":3,"title":2},"7":{"body":6,"breadcrumbs":4,"title":3},"8":{"body":76,"breadcrumbs":4,"title":3}},"docs":{"0":{"body":"This is a Solana wiki, containing info and tips on Solana program development.","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"","breadcrumbs":"Performance » Performance and transactions/accounts cost","id":"1","title":"Performance and transactions/accounts cost"},"2":{"body":"There are 3 performance metrics of Solana programs: Accounts space. The less space you occupy, the less you pay for storage. Binary size (executable account space). The less program object file takes, the less you pay for deployment. Compute units (CU). Your goal is to fit in 200k CU per transaction, otherwise you have to pay additional fee.","breadcrumbs":"Performance » Metrics","id":"2","title":"Metrics"},"3":{"body":"Use solana rent <BYTES> to calculate space price. Currently it's about 7.3 SOL per MB. Transaction fees are just 5000 lamports per signature.","breadcrumbs":"Performance » Calculating cost","id":"3","title":"Calculating cost"},"4":{"body":"","breadcrumbs":"Performance » Compiler options","id":"4","title":"Compiler options"},"5":{"body":"Newer anchor releases will ship these options in project workspace Cargo.toml: [profile.release]\nlto = \"fat\"\ncodegen-units = 1\n[profile.release.build-override]\nopt-level = 3\nincremental = false\ncodegen-units = 1 Out of them, lto = \"fat\", which is equivalent to lto = true, is the main one. It may improve performance and decrease binary size, but comes with increased compilation time. It is recommended to use it when deploying.","breadcrumbs":"Performance » LTO (Link Time Optimization)","id":"5","title":"LTO (Link Time Optimization)"},"6":{"body":"There is another option, opt-level = \"z\". It may reduce binary size by about 10%, but also degrade performance by about 50%. opt-level = \"s\" may be half as strong.","breadcrumbs":"Performance » opt-level={s,z}","id":"6","title":"opt-level={s,z}"},"7":{"body":"It is generally recommended to use arrays to store in accounts.","breadcrumbs":"Performance » Vec vs array","id":"7","title":"Vec vs array"},"8":{"body":"Using #[account(zero_copy)] and AccountLoader instead of #[account] and Account makes it so data is not copied to a new struct using borsh but instead taken from account's data field directly using casting. This is useful when dealing with large accounts to save stack space. However, by default zero_copy uses #[repr(C)], which increases data space by itself due to alignment and is likely to break client-side deserialization. In essence, it only works when each field has size of 8*N bytes, for example: #[account(zero_copy)]\nstruct User { pub authority: Pubkey, pub balance: u64, pub name: [u8; 24],\n} To avoid the #[repr(C)] issues, you can use #[repr(packed)] along with zero_copy. However, it may potentially cause UB (see rust-lang#82523 ).","breadcrumbs":"Performance » Zero copy deserialization","id":"8","title":"Zero copy deserialization"}},"length":9,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"2":{"0":{"0":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"3":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}},"5":{"0":{"0":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"7":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"*":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"8":{"tf":1.0}}},"(":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":3,"docs":{"2":{"tf":1.4142135623730951},"7":{"tf":1.0},"8":{"tf":1.7320508075688772}},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"d":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":3,"docs":{"2":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"3":{"tf":1.0},"8":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}},"u":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}},"g":{"df":0,"docs":{},"r":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"8":{"tf":1.0}}}}},"t":{"'":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"l":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"g":{"#":{"8":{"2":{"5":{"2":{"3":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":2.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"=":{"df":0,"docs":{},"{":{"df":0,"docs":{},"s":{",":{"df":0,"docs":{},"z":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":2.0}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"8":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"5":{"tf":1.0}}},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"p":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":4,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}},"e":{".":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"b":{"df":1,"docs":{"8":{"tf":1.7320508075688772}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"p":{"df":0,"docs":{},"r":{"(":{"c":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":1,"docs":{"6":{"tf":1.0}},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}},"i":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"e":{"df":4,"docs":{"2":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"8":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"a":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":1,"docs":{"3":{"tf":1.0}}}},"p":{"a":{"c":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"u":{"6":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"8":{"df":1,"docs":{"8":{"tf":1.0}}},"b":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.4142135623730951}}}}},"s":{"df":4,"docs":{"3":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":2.449489742783178}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"s":{"df":1,"docs":{"7":{"tf":1.0}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"z":{"df":1,"docs":{"6":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"1":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"2":{"0":{"0":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"3":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}},"5":{"0":{"0":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"7":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"*":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"8":{"tf":1.0}}},"(":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":3,"docs":{"2":{"tf":1.4142135623730951},"7":{"tf":1.0},"8":{"tf":1.7320508075688772}},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"d":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":3,"docs":{"2":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"3":{"tf":1.0},"8":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}}},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}},"u":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}},"g":{"df":0,"docs":{},"r":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"8":{"tf":1.0}}}}},"t":{"'":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"l":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"g":{"#":{"8":{"2":{"5":{"2":{"3":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":2.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"=":{"df":0,"docs":{},"{":{"df":0,"docs":{},"s":{",":{"df":0,"docs":{},"z":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":2.23606797749979}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"8":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":2.0}},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"p":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":8,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951},"7":{"tf":1.0},"8":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}},"e":{".":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"b":{"df":1,"docs":{"8":{"tf":1.7320508075688772}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"p":{"df":0,"docs":{},"r":{"(":{"c":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":1,"docs":{"6":{"tf":1.0}},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}},"i":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"e":{"df":4,"docs":{"2":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"8":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"a":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":1,"docs":{"3":{"tf":1.0}}}},"p":{"a":{"c":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"u":{"6":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"8":{"df":1,"docs":{"8":{"tf":1.0}}},"b":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.4142135623730951}}}}},"s":{"df":4,"docs":{"3":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":2.449489742783178}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"s":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"z":{"df":1,"docs":{"6":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"a":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"=":{"df":0,"docs":{},"{":{"df":0,"docs":{},"s":{",":{"df":0,"docs":{},"z":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"5":{"tf":1.0}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"s":{"df":1,"docs":{"7":{"tf":1.0}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});