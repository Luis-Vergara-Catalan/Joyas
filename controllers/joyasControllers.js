import { obtenerJoyas } from "../models/joyasModels.js";

//Función para ver un post
const getAllJoyas = async (req, res) =>{
    try {
        const joyas = await obtenerJoyas(req.query);
        res.status(200).json({"joyas":joyas});
    } catch (error) {
        if (error.code ==='400'){
            res.status(400).json({mensaje: "Error al obtener las joyas"});
        } else{
        res.status(400).json(error);
        }
    }
};

export { getAllJoyas}; 