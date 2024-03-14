import { Animal } from "./Animal";
import { Ave } from "./Ave";
import { Mamifero } from "./Mamifero";

function imprimeAnimal(animal: Animal) {
  console.log(`O animal ${animal.nome} é lactante?:${animal.ehLactante()}`);
  console.log(`O animal ${animal.nome} é oviparo?:${animal.ehOviparo()}`);
}

let mamifero = new Mamifero("Gato");
let ave = new Ave("Pato");

imprimeAnimal(ave);
imprimeAnimal(mamifero);