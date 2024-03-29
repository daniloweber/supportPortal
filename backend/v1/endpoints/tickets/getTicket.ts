import { Request, Response } from "express";
import {validateAuth} from "../../functions/validateJWT";
import jwt, {JwtPayload} from "jsonwebtoken";
import {client} from "../../../dbConfig";
import {Db, ObjectId} from "mongodb";

export async function getTicket(req: Request, res: Response) {

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
                const result = await collection.findOne({_id: new ObjectId(req.params.id)});
                await client.close();

                if (!result) {
                    res.status(404).send({message: 'Ticket not found'});
                    return;
                }

                await client.connect();
                const database2: Db = client.db('supportPortal');
                const collection2 = database2.collection('users');
                const result2 = await collection2.findOne({_id: new ObjectId(result.userid.toString())});
                await client.close();

                if (!result2) {
                    res.status(404).send({message: 'User not found'});
                    return;
                }

                result.name = result2.name;
                result.surname = result2.surname;
                result.mail = result2.mail;
                result.phone = result2.phone;
                res.send(result);

        }
    }
}