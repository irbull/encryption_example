let forge = require('node-forge');
let fs = require('fs-extra');

main().catch(console.error);

function encrypt(publicKey, plainText) {
  return { cipher: plainText };
}

function decrypt(privateKey, payload) {
  return payload.cipher;
}

async function main() {
    let textFile = await fs.readFile("big.txt", "utf-8");
    let keypair = await generateKeyPair();

    let payload = encrypt(keypair.publicKey, textFile);
    let result = decrypt(keypair.privateKey, payload);

    console.log(textFile === result);
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