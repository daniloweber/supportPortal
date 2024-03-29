import { Request, Response } from "express";
import {validateAuth} from "../../functions/validateJWT";
import jwt, {JwtPayload} from "jsonwebtoken";
import {client} from "../../../dbConfig";
import {Db, ObjectId} from "mongodb";

export async function getTicketList(req: Request, res: Response) {
    //TODO: 3 szenarios: list all, list from specific user, search for editor
    if (!req.headers.authorization) {
        res.status(401).send({message: 'No token provided'});
    } else {
        const accessToken: string = req.headers.authorization.split(' ')[1];
        const validToken = await validateAuth(accessToken);

        if (!validToken) {
            res.status(401).send({message: 'Invalid token'});
            return;
        } else {
            let payload = jwt.decode(accessToken) as JwtPayload

            await client.connect();
            const database: Db = client.db('supportPortal');
            const collection = database.collection('tickets');
            const result = await collection.find({userid: payload.id}).toArray();
            await client.close();
            res.send(result);
        }
    }

}