// Read and handle the decryption key
let validKey;


async function validateKey(key) {
    // since this is dummy server the validation is always set to be true 
    return true;
}

function encrypt(string, key) {
    return CryptoJS.AES.encrypt(string, key).toString();
}

function decrypt(string, key) {
    return CryptoJS.AES.decrypt(string, key).toString(CryptoJS.enc.Utf8);
}