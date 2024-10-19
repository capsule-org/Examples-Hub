import CryptoJS from "crypto-js";

/**
 * Retrieves the encryption key from the environment, ensuring it is valid.
 *
 * @returns {string} - The encryption key.
 * @throws {Error} - If the encryption key is not set or not 32 bytes long.
 */
function getEncryptionKey(): string {
  const encryptionKey = process.env.ENCRYPTION_KEY;

  if (!encryptionKey || encryptionKey.length !== 32) {
    throw new Error("ENCRYPTION_KEY must be set and be 32 bytes long");
  }

  return encryptionKey;
}

/**
 * Encrypts a given text using AES with CBC mode and PKCS7 padding.
 *
 * @param {string} text - The text to encrypt.
 * @returns {string} - The encrypted text in the format "IV:Ciphertext".
 */
export function encrypt(text: string): string {
  const iv = CryptoJS.lib.WordArray.random(16);
  const key = CryptoJS.enc.Utf8.parse(getEncryptionKey());

  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return `${CryptoJS.enc.Hex.stringify(iv)}:${encrypted.ciphertext.toString()}`;
}

/**
 * Decrypts the provided encrypted text.
 *
 * @param {string} encryptedText - The encrypted text in the format "IV:Ciphertext".
 * @returns {string} - The decrypted plaintext.
 * @throws {Error} - If decryption fails.
 */
export function decrypt(encryptedText: string): string {
  const [ivHex, encryptedDataHex] = encryptedText.split(":");
  const iv = CryptoJS.enc.Hex.parse(ivHex);
  const encryptedData = CryptoJS.enc.Hex.parse(encryptedDataHex);
  const key = CryptoJS.enc.Utf8.parse(getEncryptionKey());

  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: encryptedData,
    iv: iv,
    key: key,
    algorithm: CryptoJS.algo.AES,
    padding: CryptoJS.pad.Pkcs7,
  });

  const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
