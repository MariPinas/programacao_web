import express, {Request, Response} from "express";

const PORT=process.env.PORT ?? 3000;

const app = express();
app.use (express.json());

function appLog(){
    console.log("API se encontra disponivel no URL: http://localhost:3000");
}

function hello(req: Request, res: Response){
    res.status(201).json({mensagem:"Hello World!"});
}

app.get("/api/hello", hello);

app.listen(PORT, appLog);
