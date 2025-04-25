import { Router} from "express";
import { getAllJoyas, getFilterJoyas, logRequest } from "../controllers/joyasControllers.js";

const routes = Router();

routes.use(logRequest);
routes.get('/', getAllJoyas); // con esto se ve el post
routes.get('/filtros', getFilterJoyas);

export default routes;