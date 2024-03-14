"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ave_1 = require("./Ave");
const Mamifero_1 = require("./Mamifero");
function imprimeAnimal(animal) {
    console.log(`O animal ${animal.nome} é lactante?:${animal.ehLactante()}`);
    console.log(`O animal ${animal.nome} é oviparo?:${animal.ehOviparo()}`);
}
let mamifero = new Mamifero_1.Mamifero("Gato");
let ave = new Ave_1.Ave("Pato");
imprimeAnimal(ave);
imprimeAnimal(mamifero);
