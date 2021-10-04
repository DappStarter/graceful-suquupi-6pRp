require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind huge imitate produce foster spoil'; 
let testAccounts = [
"0x22b0b6010386eb52c211874e81b8e3908f3c35e75ad50c45f99c01500ddf9489",
"0x1abd6a4796aca534cf8c719e76b15157a11c921dacf48df4c7f6e39bfa3b0bd0",
"0xc6af8c20f33100f96e3bef62a7532a0db1ffcc781958902d89ca88802bd60d17",
"0xb305d6beb968d5df1f0e3d788ad580b0672276a596527fdd491235a9842166f5",
"0xa4683c0d80a83eae2201ff998cdf18f49942049a769d1f18498ca59bb5cfb67b",
"0xae0677d99188a932d5c9afb2bac9080f620b1e9b7918c98acbfa02113af15f47",
"0xb3d0326624482e9104df1dc9408a0bc6d8ac519b58d1bd61d583a4edf5ad407c",
"0x551d463d8e794518abef9f77066473fc365320492a646dcdd1d6b4ff99ef84f5",
"0x66d90728ef4023c32ce169d40feb671815c40060a3cdae3cbb9628b64f8652d9",
"0x994580218074b38a34372a21266ce1c4b7a327ba401aa5796548789c54af25e8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


