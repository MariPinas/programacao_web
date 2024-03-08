"use strict";
// Exercicio 1
class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    get getMarca() {
        return this.marca;
    }
    set setMarca(marca) {
        this.marca = marca;
    }
    get getModelo() {
        return this.modelo;
    }
    set setModelo(modelo) {
        this.modelo = modelo;
    }
    get getAno() {
        return this.ano;
    }
    set setAno(ano) {
        this.ano = ano;
    }
    get getCor() {
        return this.cor;
    }
    calculaIdade() {
        return 2024 - this.ano;
    }
}
let carroMariana = new Carro("Honda", "City", 2018, "Prata");
console.log(carroMariana, carroMariana.calculaIdade());
//Exercicio 2
class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    get getValor1() {
        return this.valor1;
    }
    set setValor1(valor1) {
        this.valor1 = valor1;
    }
    get getValor2() {
        return this.valor2;
    }
    set setValor2(valor2) {
        this.valor2 = valor2;
    }
    soma() {
        return this.valor1 + this.valor2;
    }
    divisao() {
        if (this.valor2 != 0)
            return this.valor1 / this.valor2;
        else {
            console.log("erro");
            return 1;
        }
    }
    multiplicacao() {
        return this.valor1 * this.valor2;
    }
    subtracao() {
        return this.valor1 - this.valor2;
    }
    porcentagem() {
        return (this.valor1 / 100) * this.valor2;
    }
}
let calc = new Calculadora(20, 8);
console.log(`A soma de ${calc.getValor1} e de ${calc.getValor2} é igual a: ${calc.soma()}`);
calc.setValor1 = 8;
calc.setValor2 = 4;
console.log(`A divisao entre ${calc.getValor1} por ${calc.getValor2}  é igual a: ${calc.divisao()}`);
calc.setValor1 = 10;
calc.setValor2 = 8;
console.log(`A subtracao de ${calc.getValor1} por ${calc.getValor2}  é igual a: ${calc.subtracao()}`);
calc.setValor1 = 1;
calc.setValor2 = 2;
console.log(`A multiplicacao de ${calc.getValor1} por ${calc.getValor2}  é igual a: ${calc.multiplicacao()}`);
calc.setValor1 = 20;
calc.setValor2 = 65;
console.log(`${calc.getValor1}% de ${calc.getValor2} é: ${calc.porcentagem()}`);
