import jwt, { JwtPayload } from 'jsonwebtoken';

export async function validateAuth (accessToken: any) {

    const decodedToken= jwt.decode(accessToken);

    if (decodedToken === null) {
        return false;
    } else {
        let payload: any = decodedToken as JwtPayload;

        const currentTimeInMilliseconds = Date.now();
        const currentTimeInSeconds = Math.floor(currentTimeInMilliseconds/1000);

        return (payload.exp && payload.exp > currentTimeInSeconds);
    }
}