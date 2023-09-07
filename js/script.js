function encrypt() {
    const inputText = document.getElementById("inputText").value;
    const encryptionKey = document.getElementById("encryptionKey").value;
    const encryptedText = CryptoJS.AES.encrypt(inputText, encryptionKey).toString();
    document.getElementById("output").innerText = "Encrypted: " + encryptedText;
}

function decrypt() {
    const encryptedText = document.getElementById("inputText").value;
    const encryptionKey = document.getElementById("encryptionKey").value;
    const decryptedText = CryptoJS.AES.decrypt(encryptedText, encryptionKey).toString(CryptoJS.enc.Utf8);
    document.getElementById("output").innerText = "Decrypted: " + decryptedText;
}
