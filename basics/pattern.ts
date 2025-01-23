function printPattern(numLines: number, char:string):void{
    let str:string = '';
    for (let i:number = 0; i < numLines; i++) {
        str = str + char;
        console.log(str);
    }
}

printPattern(5,"*");