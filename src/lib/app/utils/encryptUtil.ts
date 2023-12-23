import { VITE_SECRET_SALT_KEY } from "$env/static/private";
import * as crypto from "crypto";

const algoritm = 'aes-256-cbc';
const key = Buffer.from(VITE_SECRET_SALT_KEY, 'hex');
const iv = crypto.randomBytes(16);

export function encryptUtil(data: string): string | false{
    try {
        const cipher = crypto.createCipheriv(algoritm, Buffer.from(key), iv);
        let encrypted = cipher.update(data, 'utf-8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }catch(error){
        console.log(error);
        return false;
    }
}

export function decryptUtil(hash: string): string | false {
    try{
        const decipher = crypto.createDecipheriv(algoritm, Buffer.from(key), iv);
        let decrypted = decipher.update(hash, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
    }catch(error){
        console.log(error);
        return false;
    }
}