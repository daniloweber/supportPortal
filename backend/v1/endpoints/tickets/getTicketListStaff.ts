import {Request, Response} from "express";
import {validateAuth} from "../../functions/validateJWT";
import jwt, {JwtPayload} from "jsonwebtoken";
import {client} from "../../../dbConfig";
import {Db, ObjectId} from "mongodb";


export async function getTicketListStaff(req: Request, res: Response) {
    if (!req.headers.authorization) {
        res.status(401).send({message: 'No token provided'});
    } else {
        const accessToken: string = req.headers.authorization.split(' ')[1];
        const validToken = await validateAuth(accessToken);

        if (!validToken) {
            res.status(401).send({message: 'Invalid token'});
            return;
        } else {

            const enoughPermissions: boolean = (jwt.decode(accessToken) as JwtPayload).role === 'staff' || (jwt.decode(accessToken) as JwtPayload).role === 'admin';

            if (!enoughPermissions) {
                res.status(403).send({message: 'Not enough permissions'});
                return;
            } else {

                let payload = jwt.decode(accessToken) as JwtPayload;
                await client.connect();
                const database: Db = client.db('supportPortal');
                const collection = database.collection('tickets');
                const result = await collection.find({editorid: new ObjectId(payload.id)}).toArray();
                await client.close();
                res.send(result);
            }
        }
    }
}