import { Animal } from "./Animal";
export class Mamifero implements Animal {
    nome: string;
    constructor(nome:string){
      this.nome = nome;
  }
    ehLactante(): boolean {
       return true;
    }
    ehOviparo(): boolean {
       return this.nome=="Ornitorrinco";
    }
    
    
}