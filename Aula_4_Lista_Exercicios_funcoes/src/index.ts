
function maior(...valores:number[]): number{
let maior = -1
let i:number
    for(let i = 0; i < 6; i++){
        if (valores[i] > maior){
            maior = valores[i]
        }
    }
    return maior;
    
}

//console.log ("Exercicio 1 : " , maior(1,2,3,4,5,6));

function par(val:number): boolean{
    if (val%2==0)
        return true;
    else 
        return false;

}

//console.log ("Exercicio 2: ", par(2));

function media(...valores:number[]) : number{
    let i:number;
    let media = 0;
    for (i = 0; i < 6; i++){
        media = media + valores[i];
    }
    return media/i;
}

//console.log("Exercicio 3: ", media(1,2,3,4,5,6));

function upper(palavra:string):string{
    return palavra.toUpperCase();
}
//console.log("Exercicio 4", upper("Bezinha muito gorda"));

function primo(var1:number):boolean{
    let i:number;
    for(i = 2; i < var1; i++){
        if (var1 % i == 0)
            return false;
    }
    return true;
}

//console.log("Exercicio 5", primo(2), primo(3), primo(11), primo(14), primo(17));

function inverter(...num:number[]): number[]{
    return num.reverse();
}

//console.log("Exercicio 6", inverter(1,2,3,4,5,6,7,8,9));

function porcentagem(num:number, p:number):number{
    return num * ((p/100)+1);
}

//console.log("Exercicio 7", porcentagem(10, 75));

function invertePalavra(texto:string):string{
    return texto.split('') .reverse() .toString();
}

//console.log("Exercicio 8", invertePalavra("mariana"));

function somaPar(...num:number[]):number{
    let soma:number = 0;

    for(let i=0; i < 4; i++){
        if(num[i] % 2 == 0){
            soma = soma + num[i];
        }
    }
    return soma;
}

//console.log("Exercicio 9", somaPar(1,2,3,4,5));