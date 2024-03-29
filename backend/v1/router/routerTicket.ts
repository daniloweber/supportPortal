import express, {Request, Response} from "express";
import multer from "multer";
import {createTicket} from "../endpoints/tickets/createTicket";
import {getTicketList} from "../endpoints/tickets/getTicketList";
import {getTicket} from "../endpoints/tickets/getTicket";
import {updateTicket} from "../endpoints/tickets/updateTicket";
import {getTicketListStaff} from "../endpoints/tickets/getTicketListStaff";


const routerTicket = express.Router();
const upload = multer({dest:'upload/'});
routerTicket.post('/create', upload.single('uploaded_file'), async (req: Request, res: Response) => {
    await createTicket(req, res);
})

routerTicket.patch('/update/:id', upload.single('uploaded_file'), async (req: Request, res: Response) => {
    await updateTicket(req, res);
})

routerTicket.get('/get/:id', async (req: Request, res: Response) => {
    await getTicket(req, res);
})

//list for logged in user
routerTicket.get('/list', async (req: Request, res: Response) => {
    await getTicketList(req, res);
})

//list from editor
routerTicket.get('/list/staff', async (req: Request, res: Response) => {
    await getTicketListStaff(req, res);
})


export default routerTicket;