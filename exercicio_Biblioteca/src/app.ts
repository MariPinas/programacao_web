import express from 'express';
import { cadastrarLivro, listarTodosLivros } from './controller/LivroController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/books", cadastrarLivro);
//app.put("/api/product", atualizarProduto)
//app.delete("/api/product", deletarProduto)
//app.get("/api/product", filtrarProduto)
app.get("/api/books", listarTodosLivros)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));