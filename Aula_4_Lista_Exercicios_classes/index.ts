// Exercicio 1
class Carro {
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
  
    constructor(marca: string, modelo: string, ano: number, cor: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }
  
    get getMarca():string{
        return this.marca;
    }

    set setMarca(marca:string){
        this.marca = marca;
    }

    get getModelo():string{
        return this.modelo;
    }

    set setModelo(modelo:string){
        this.modelo = modelo;
    }

    get getAno():number{
        return this.ano;
    }

    set setAno(ano:number){
        this.ano = ano;
    }

    get getCor():string{
        return this.cor;
    }

    calculaIdade(ano:number):number{
        return 2024 - ano;
    }
  }

  let carroMariana = new Carro("Honda", "City", 2018, "Prata");
  console.log(carroMariana);
  