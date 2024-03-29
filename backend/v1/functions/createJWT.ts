import jwt from 'jsonwebtoken';
import {User} from "./interfaces";

export async function createJWT(user: User, id: string) {

    return jwt.sign({foo: 'bar', role: user.role, id: id}, 'shhhhh', {expiresIn: '24h'});
}