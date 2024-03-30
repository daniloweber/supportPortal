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

                if (!result) {
                    res.status(404).send({message: 'Ticket not found'});
                    return;
                }

                for (let i = 0; i < result.length; i++) {
                    await client.connect();
                    const database2: Db = client.db('supportPortal');
                    const collection2 = database2.collection('users');
                    const result2 = await collection2.findOne({_id: new ObjectId(result[i].userid.toString())});
                    if (!result2) {
                        res.status(404).send({message: 'User not found'});
                        return;
                    }
                    result[i].name = result2.name;
                    result[i].surname = result2.surname;
                }
                await client.close();
                res.send(result);
            }
        }
    }
}