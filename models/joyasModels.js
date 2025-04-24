import { pool } from '../db.js';
import pgk from "pg-format";

const format = pgk;

export const obtenerJoyas = async ({
    limit = 3, 
    order_by = "stock_ASC",
    page = 2,
}) => {
    try {
        const [campo, direccion] = order_by.split("_"); // split("_") es para dar un espacio en un array
        const offset = Math.abs((page - 1) * limit); // dejar la 1ra pagina num 1
        const formattedQuery = format(
            "SELECT * FROM inventario order by %s %s LIMIT %s OFFSEt %s",
             campo,
             direccion,
             limit,
             offset
        );
        const { rows: inventario } = await pool.query(formattedQuery);
        return inventario;
    } catch (error) {
        if (error.code ==='400'){
            res.status(400).json({mensaje: "Error al obtener las joyas"});
        } else{
        res.status(400).json(error);
        };
    };
};


export const filtroJoyas = async ({
    precio_max,
    precio_min,
    categoria,
    metal,
}) => {
    try {
        const condiciones = [];
        const valores = [];

        if (precio_max) {
            condiciones.push(`precio <= $${valores.length + 1}`);
            valores.push(precio_max);
        }

        if (precio_min) {
            condiciones.push(`precio >= $${valores.length + 1}`);
            valores.push(precio_min);
        }

        if (categoria) {
            condiciones.push(`categoria = $${valores.length + 1}`);
            valores.push(categoria);
        }

        if (metal) {
            condiciones.push(`metal = $${valores.length + 1}`);
            valores.push(metal);
        }

        let consulta = 'SELECT * FROM inventario';

        if (condiciones.length > 0) {
            consulta += ' WHERE ' + condiciones.join(' AND ');
        }

        const { rows: inventario } = await pool.query(consulta, valores);
        return inventario;

    } catch (error) {
        throw new Error(`Error al filtrar las joyas: ${error.message}`);
    }
};