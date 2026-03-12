import { File } from "buffer";
import crypto from "crypto";
import fs from "fs";
import * as fsAsync from "fs/promises"
// Returns the Endpoint of the file
export async function uploadFile(file: File | Blob, filename: string): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    // Hash the name
    var shasum = crypto.createHash("sha1");
    shasum.update(filename);
    let name = shasum.digest("hex");

    // Get extension
    let extension = filename.split(".")[1];
    if (extension.length > 5) {
        throw new Error(`Incorrect extension size GOT: ${extension}`);
    }
    await fsAsync.writeFile(`./public/uploads/${name}.${extension}`, buffer);
    return `/uploads/${name}.${extension}`;
}
try {
    if(!fs.existsSync("./public/uploads")){
        fs.mkdirSync("./public/uploads", );
    }
} catch (error) {}
