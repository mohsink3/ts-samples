var numbers = [1, 2, 3, 4];
var stringnumbers = numbers.map(function (n) { return n.toString(); });
// let strnos:string[] = numbers.map(string);
var str = '';
var allnos = stringnumbers.reduce(function (str, n) { return str + '-' + n; });
console.log(allnos);
