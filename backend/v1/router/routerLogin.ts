import express, {Request, Response} from "express";
import {loginUser} from "../endpoints/user/loginUser";
import {logoutUser} from "../endpoints/user/logoutUser";
import {createUser} from "../endpoints/user/createUser";


const routerLogin = express.Router();

routerLogin.post('/login', async (req: Request, res: Response) => {
    await loginUser(req, res);
})

routerLogin.post('/logout', async (req: Request, res: Response) => {
    await logoutUser(req, res);
})

routerLogin.post('/signin', async (req: Request, res: Response) => {
    await createUser(req, res);
})

export default routerLogin;