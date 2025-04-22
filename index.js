import "dotenv/config";
import express from 'express';
import cors from 'cors';
import routerJoyas from "./routes/joyasRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});

//middlewares
app.use('/joyas', routerJoyas)