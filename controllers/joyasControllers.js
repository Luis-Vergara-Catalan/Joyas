import { filtroJoyas, obtenerJoyas} from "../models/joyasModels.js";


//Middleware
export const logRequest = (req, res, next) => {
    console.log(`Método: ${req.method}, Ruta: ${req.url}`);
    next();
}

// Funcón Hateoas
const formatHateoas = (results)=>{
    return{
        results: results,
    };
};

//Función para ver todas las hoyas
export const getAllJoyas = async (req, res) =>{
    try {
        const results = await obtenerJoyas(req.query);
        const resultados = formatHateoas(results);
        res.status(200).json({resultados});
    } catch (error) {
        if (error.code ==='400'){
            res.status(400).json({mensaje: "Error al obtener las joyas"});
        } else{
        res.status(400).json(error);
        }
    };
};

export const getFilterJoyas = async (req, res) =>{
    try {
        const filter = await filtroJoyas(req.query);
        res.status(200).json({"joyas":filter});
    } catch (error) {
        if (error.code ==='400'){
            res.status(400).json({mensaje: "Error al obtener las joyas"});
        } else{
        res.status(400).json(error);
        }
    };
};
