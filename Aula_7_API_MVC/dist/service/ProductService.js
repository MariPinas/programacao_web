"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const Product_1 = require("../model/Product");
const ProductRepository_1 = require("../repository/ProductRepository");
class ProductService {
    constructor() {
        this.productRepository = new ProductRepository_1.ProductRepository();
    }
    cadastrarProduto(produtoData) {
        const { name, description, price } = produtoData;
        if (!name || !description || !price) {
            throw new Error("Informações incompletas");
        }
        const novoProduto = new Product_1.Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }
    consultarProduto(id, name) {
        if (name) {
            const nomeProduto = name;
            console.log(name);
            return this.productRepository.filtraProdutoPorNome(nomeProduto);
        }
        else {
            const idNumber = parseInt(id, 10);
            console.log(id);
            return this.productRepository.filtraProdutoPorId(idNumber);
        }
    }
    getProducts() {
        return this.productRepository.filtraTodosProdutos();
    }
}
exports.ProductService = ProductService;
