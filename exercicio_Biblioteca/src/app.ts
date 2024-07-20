import express from 'express';
import { cadastrarLivro, listarTodosLivros, filtrarLivro, atualizarLivro } from './controller/LivroController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/books", cadastrarLivro);
app.put("/api/books", atualizarLivro)
//app.delete("/api/product", deletarProduto)
app.get("/api/books/:id", filtrarLivro)
app.get("/api/books", listarTodosLivros)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));