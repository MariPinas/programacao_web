
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
