let contador:number = 0;
export class ModalidadePaes{
    id:number;
    name:string;
    vegano: boolean;

    constructor(name:string, vegan:boolean){
        this.id = this.geraId();
        this.name = name;
        this.vegano = vegan;
    }

    private geraId(): number {
        return ++contador;
    }

}


