const {onRequest} = require("firebase-functions/v2/https");
const forge = require('node-forge');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const publicKeyString = `PUBLIC_KEY`;

exports.createDevWalletId = onRequest(async (req, res) => {
    const hexEncodedEntitySecret = "ENTITY_SECRET"

    if (!hexEncodedEntitySecret) {
        res.status(400).send('No hexEncodedEntitySecret provided in request.');
        return;
    }

    const entitySecret = forge.util.hexToBytes(hexEncodedEntitySecret);
    if (entitySecret.length != 32) {
        res.status(400).send('Invalid entity secret');
        return;
    }

    const publicKey = forge.pki.publicKeyFromPem(publicKeyString);
    const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
        md: forge.md.sha256.create(),
        mgf1: {
            md: forge.md.sha256.create(),
        },
    });

    const base64EncryptedData = forge.util.encode64(encryptedData);

    try {
        const apiResponse = await axios.post('https://api.circle.com/v1/w3s/developer/walletSets', {
            idempotencyKey: uuidv4(),
            name: "Checking Wallet",
            entitySecretCiphertext: base64EncryptedData
        }, {
        headers: {
            'accept': 'application/json',
            'authorization': 'Bearer <API_KEY>',
            'content-type': 'application/json'
        }
    });

    res.send(apiResponse.data);

} catch (error) {
   if (error.res) {
       console.error('Error calling the API:', error.response.data);
       res.status(error.res.status).send(error.response.data);
   } else {
       console.error('Axios request failed:', error.message);
       res.status(500).send('Internal server error');
   }
}

});

// END createDevWalletId

exports.createDevWallet = onRequest(async (req, res) => {
    const hexEncodedEntitySecret = "ENTITY_SECRET"

    if (!hexEncodedEntitySecret) {
        res.status(400).send('No hexEncodedEntitySecret provided in request.');
        return;
    }

    const entitySecret = forge.util.hexToBytes(hexEncodedEntitySecret);
    if (entitySecret.length != 32) {
        res.status(400).send('Invalid entity secret');
        return;
    }

    const publicKey = forge.pki.publicKeyFromPem(publicKeyString);
    const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
        md: forge.md.sha256.create(),
        mgf1: {
            md: forge.md.sha256.create(),
        },
    });

    const base64EncryptedData = forge.util.encode64(encryptedData);

    try {
        const apiResponse = await axios.post('https://api.circle.com/v1/w3s/developer/wallets', {
            idempotencyKey: uuidv4(),
            count: 1,
            entitySecretCiphertext: base64EncryptedData,
            walletSetId: "WALLET_SET_ID",
            blockchains: [
                "MATIC-MUMBAI"
              ],
            metadata: [
                {
                    name: "Test Account via Cloud Function",
                    refId: "check001"
                }
            ]
        }, {
        headers: {
            'accept': 'application/json',
            'authorization': 'Bearer <API_KEY>',
            'content-type': 'application/json'
        }
    });

    res.send(apiResponse.data);

} catch (error) {
   if (error.res) {
       console.error('Error calling the API:', error.response.data);
       res.status(error.res.status).send(error.response.data);
   } else {
       console.error('Axios request failed:', error.message);
       res.status(500).send('Internal server error');
   }
}

});

// END createDevWallet

exports.createDevTransfer = onRequest(async (req, res) => {
    const hexEncodedEntitySecret = "ENTITY_SECRET"

    if (!hexEncodedEntitySecret) {
        res.status(400).send('No hexEncodedEntitySecret provided in request.');
        return;
    }

    const entitySecret = forge.util.hexToBytes(hexEncodedEntitySecret);
    if (entitySecret.length != 32) {
        res.status(400).send('Invalid entity secret');
        return;
    }

    const publicKey = forge.pki.publicKeyFromPem(publicKeyString);
    const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
        md: forge.md.sha256.create(),
        mgf1: {
            md: forge.md.sha256.create(),
        },
    });

    const base64EncryptedData = forge.util.encode64(encryptedData);

    try {
        const apiResponse = await axios.post('https://api.circle.com/v1/w3s/developer/transactions/transfer', {
            idempotencyKey: uuidv4(),
            count: 1,
            entitySecretCiphertext: base64EncryptedData,
            walletSetId: "WALLET_SET_ID",
            destinationAddress: "DESTINATION_ADDRESS",
            feeLevel: "MEDIUM",
            tokenId: "TOKEN_ID"
        }, {
        headers: {
            'accept': 'application/json',
            'authorization': 'Bearer <API_KEY>',
            'content-type': 'application/json'
        }
    });

    res.send(apiResponse.data);

} catch (error) {
   if (error.res) {
       console.error('Error calling the API:', error.response.data);
       res.status(error.res.status).send(error.response.data);
   } else {
       console.error('Axios request failed:', error.message);
       res.status(500).send('Internal server error');
   }
}

});

// END createDevTransfer

exports.accelerateDevTransfer = onRequest(async (req, res) => {
    const hexEncodedEntitySecret = "ENTITY_SECRET"

    if (!hexEncodedEntitySecret) {
        res.status(400).send('No hexEncodedEntitySecret provided in request.');
        return;
    }

    const entitySecret = forge.util.hexToBytes(hexEncodedEntitySecret);
    if (entitySecret.length != 32) {
        res.status(400).send('Invalid entity secret');
        return;
    }

    const publicKey = forge.pki.publicKeyFromPem(publicKeyString);
    const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
        md: forge.md.sha256.create(),
        mgf1: {
            md: forge.md.sha256.create(),
        },
    });

    const base64EncryptedData = forge.util.encode64(encryptedData);

    try {
        const apiResponse = await axios.post('https://api.circle.com/v1/w3s/developer/transactions/{id}/accelerate', {
            idempotencyKey: uuidv4(),
            entitySecretCiphertext: base64EncryptedData
        }, {
        headers: {
            'accept': 'application/json',
            'authorization': 'Bearer <API_KEY>',
            'content-type': 'application/json'
        }
    });

    res.send(apiResponse.data);

} catch (error) {
   if (error.res) {
       console.error('Error calling the API:', error.response.data);
       res.status(error.res.status).send(error.response.data);
   } else {
       console.error('Axios request failed:', error.message);
       res.status(500).send('Internal server error');
   }
}

});

// End accelerateDevTransfer

exports.cancelDevTransfer = onRequest(async (req, res) => {
    const hexEncodedEntitySecret = "ENTITY_SECRET"

    if (!hexEncodedEntitySecret) {
        res.status(400).send('No hexEncodedEntitySecret provided in request.');
        return;
    }

    const entitySecret = forge.util.hexToBytes(hexEncodedEntitySecret);
    if (entitySecret.length != 32) {
        res.status(400).send('Invalid entity secret');
        return;
    }

    const publicKey = forge.pki.publicKeyFromPem(publicKeyString);
    const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
        md: forge.md.sha256.create(),
        mgf1: {
            md: forge.md.sha256.create(),
        },
    });

    const base64EncryptedData = forge.util.encode64(encryptedData);

    try {
        const apiResponse = await axios.post('https://api.circle.com/v1/w3s/developer/transactions/{id}/cancel', {
            idempotencyKey: uuidv4(),
            entitySecretCiphertext: base64EncryptedData
        }, {
        headers: {
            'accept': 'application/json',
            'authorization': 'Bearer <API_KEY>',
            'content-type': 'application/json'
        }
    });

    res.send(apiResponse.data);

} catch (error) {
   if (error.res) {
       console.error('Error calling the API:', error.response.data);
       res.status(error.res.status).send(error.response.data);
   } else {
       console.error('Axios request failed:', error.message);
       res.status(500).send('Internal server error');
   }
}

});

// End cancelDevTransfer

exports.contractDevExecution = onRequest(async (req, res) => {
    const hexEncodedEntitySecret = "ENTITY_SECRET"

    if (!hexEncodedEntitySecret) {
        res.status(400).send('No hexEncodedEntitySecret provided in request.');
        return;
    }

    const entitySecret = forge.util.hexToBytes(hexEncodedEntitySecret);
    if (entitySecret.length != 32) {
        res.status(400).send('Invalid entity secret');
        return;
    }

    const publicKey = forge.pki.publicKeyFromPem(publicKeyString);
    const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
        md: forge.md.sha256.create(),
        mgf1: {
            md: forge.md.sha256.create(),
        },
    });

    const base64EncryptedData = forge.util.encode64(encryptedData);

    try {
        const apiResponse = await axios.post('https://api.circle.com/v1/w3s/developer/transactions/contractExecution', {
            idempotencyKey: uuidv4(),
            entitySecretCiphertext: base64EncryptedData,
            abiFunctionSignature: "",
            abiParameters: [
                ""
            ],
            contractAddress: "",
            feeLevel: "MEDIUM",
            walletId: "WALLET_ID"
        }, {
        headers: {
            'accept': 'application/json',
            'authorization': 'Bearer <API_KEY>',
            'content-type': 'application/json'
        }
    });

    res.send(apiResponse.data);

} catch (error) {
   if (error.res) {
       console.error('Error calling the API:', error.response.data);
       res.status(error.res.status).send(error.response.data);
   } else {
       console.error('Axios request failed:', error.message);
       res.status(500).send('Internal server error');
   }
}

});

// End contractDevExecution