import { Router} from "express";
import { getAllJoyas, getFilterJoyas } from "../controllers/joyasControllers.js";

const routes = Router();

routes.get('/', getAllJoyas); // con esto se ve el post
routes.get('/filtros', getFilterJoyas);

export default routes;