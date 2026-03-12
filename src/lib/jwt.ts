import jwt, { JwtPayload } from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "your-secret-key";
const expiresIn = "1h";

// Function to sign a payload and create a JWT token
export function sign(payload: any): Promise<string> {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, { expiresIn }, (err: any, token) => {
            if (err) {
                reject(err);
            } else {
                if (!token) {
                    return reject("token undefined");
                }
                resolve(token);
            }
        });
    });
}

export interface jwtToken extends JwtPayload {
    username: string;
    lastLogin: number;
    admin: boolean;
    ip: string;
}

// Function to verify a JWT token
export function verify(token: string): Promise<jwtToken> {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded as jwtToken);
            }
        });
    });
}
