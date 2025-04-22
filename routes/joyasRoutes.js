import { Router} from "express";
import { getAllJoyas } from "../controllers/joyasControllers.js";


const routes = Router();

routes.get('/', getAllJoyas); // con esto se ve el post

export default routes;