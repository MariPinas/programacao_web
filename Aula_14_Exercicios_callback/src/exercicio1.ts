/* export function imprimir(value: string):void{
    console.log(value);
}

export function reverte(str, callback: (param:string)=>void):void{
    let op = str;
    callback(op);
}
*/

export function reverterString(s:string, callback: (param: string)=>string):void{
    const op:string = s.split('').reverse().join('');
    const resultado = callback(op);
    console.log(resultado);
}

export function exibeFrase(frase:string):string{
    return `A INVERSÃO DA SETENÇA RESULTOU EM: ${frase.toUpperCase()}`
}
