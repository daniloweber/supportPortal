import express, {Request, Response} from "express";
import multer from "multer";
import {createTicket} from "../endpoints/tickets/createTicket";
import {getTicketList} from "../endpoints/tickets/getTicketList";
import {getTicket} from "../endpoints/tickets/getTicket";
import {updateTicket} from "../endpoints/tickets/updateTicket";


const routerTicket = express.Router();
const upload = multer({dest:'upload/'});
routerTicket.post('/create', upload.single('uploaded_file'), async (req: Request, res: Response) => {
    await createTicket(req, res);
})

routerTicket.patch('/update/:id', async (req: Request, res: Response) => {
    await updateTicket(req, res);
})

routerTicket.get('/get/:id', async (req: Request, res: Response) => {
    await getTicket(req, res);
})

routerTicket.get('/list', async (req: Request, res: Response) => {
    await getTicketList(req, res);
})

//list from specific user
routerTicket.get('/list/:id', async (req: Request, res: Response) => {
    await getTicketList(req, res);
})

//Search for editor of ticket
routerTicket.get('/search', async (req: Request, res: Response) => {
    await getTicketList(req, res);
})

//@ts-ignore
export default routerTicket;