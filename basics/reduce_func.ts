let numbers: number[] = [1,2,3,4];
let stringnumbers:string[] = numbers.map(n => n.toString());
// let strnos:string[] = numbers.map(string);
console.log(stringnumbers);

let str:string = '';
let allnos:string = stringnumbers.reduce((str, n:string)=>str +'-'+n);
console.log(allnos);
