import express, {Express} from "express";
import routerTicket from "./v1/router/routerTicket";
import routerLogin from "./v1/router/routerLogin";


const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/ticket', routerTicket);
app.use('/user', routerLogin);

const port: number = 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
