let forge = require('node-forge');
let fs = require('fs-extra');
console.log("Starting encryption example");

main().catch(console.error);

async function main() {
    let textFile = await fs.readFile("big.txt", "utf-8");
    let keypair = await generateKeyPair();

    // Use a public private key to share textFile with a friend
}

async function generateKeyPair() {
    return new Promise((resolve, reject) => {
        let rsa = forge.pki.rsa;
        rsa.generateKeyPair({ bits: 2048, workers: 2 }, function (err, keypair) {
            if (err) {
                reject(err);
            } else {
                resolve(keypair);
            }
        });
    });
}