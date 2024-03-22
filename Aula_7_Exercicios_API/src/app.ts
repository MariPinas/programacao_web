import express, {Request, Response} from "express";
import { Produtos } from "./Produtos";

const PORT=process.env.PORT ?? 3500;
let estoque:Produtos[] = [];
const app = express();
app.use (express.json());

function appLog(){
    console.log("API se encontra disponivel no URL: http://localhost:3500");
}

function CadProducts(req: Request, res: Response){ //funcao para adicionar, falta funcao para deletar
    const produtos:Produtos[] = req.body
    for (let i = 0; i<produtos.length; i++){
        estoque.push(produtos[i]) //criei um novo vetor e fui adicionando os valores do vetor do post neste por este for
    }
    
    res.status(201).json({
            mensagem: "Produto salvo com sucesso :)",
            produtos: produtos
            }
        );
}

app.post("/api/products", CadProducts);
app.listen(PORT, appLog);
