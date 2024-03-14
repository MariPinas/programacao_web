import { Animal } from "./Animal";

export class Ave implements Animal {
   nome:string;
   constructor(nome:string){
      this.nome = nome;
  }
   ehLactante(): boolean {
      return false;
   }
   ehOviparo(): boolean {
      return true;
   }

}