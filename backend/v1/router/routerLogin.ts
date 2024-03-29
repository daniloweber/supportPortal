import express, {Request, Response} from "express";
import {loginUser} from "../endpoints/user/loginUser";
import {createUser} from "../endpoints/user/createUser";


const routerLogin = express.Router();

routerLogin.post('/login', async (req: Request, res: Response) => {
    await loginUser(req, res);
})


routerLogin.post('/signin', async (req: Request, res: Response) => {
    await createUser(req, res);
})

export default routerLogin;