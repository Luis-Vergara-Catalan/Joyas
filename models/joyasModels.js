import { pool } from '../db.js';
import pgk from "pg-format";

const format = pgk;

const obtenerJoyas = async ({
    limit = 10, 
    order_by = "stock_ASC",
}) => {
    try {
        const [stock, precio] = order_by.split("_"); // split("_") es para dar un espacio en un array
        const formattedQuery = format(
            "SELECT * FROM inventario order by %s %s LIMIT %s",
             stock,
             precio,
             limit,
        );
        const { rows: inventario } = await pool.query(formattedQuery);
        return inventario;
    } catch (error) {
        if (error.code ==='400'){
            res.status(400).json({mensaje: "Error al obtener las joyas"});
        } else{
        res.status(400).json(error);
        }
    }
}
export { obtenerJoyas};