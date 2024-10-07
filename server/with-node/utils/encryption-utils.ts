import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

if (!ENCRYPTION_KEY || ENCRYPTION_KEY.length !== 16) {
  throw new Error("ENCRYPTION_KEY must be set and be 16 bytes long");
}

const IV_LENGTH = 16;

function getKey(): CryptoJS.lib.WordArray {
  return CryptoJS.enc.Utf8.parse(ENCRYPTION_KEY!);
}

function toHex(wordArray: CryptoJS.lib.WordArray): string {
  return CryptoJS.enc.Hex.stringify(wordArray);
}

function fromHex(hex: string): CryptoJS.lib.WordArray {
  return CryptoJS.enc.Hex.parse(hex);
}

export function encrypt(text: string): string {
  const iv = CryptoJS.lib.WordArray.random(IV_LENGTH);
  const key = getKey();

  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return `${toHex(iv)}:${encrypted.ciphertext.toString()}`;
}

export function decrypt(encryptedText: string): string {
  const [ivHex, encryptedDataHex] = encryptedText.split(":");
  const iv = fromHex(ivHex);
  const encryptedData = fromHex(encryptedDataHex);

  const key = getKey();

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
