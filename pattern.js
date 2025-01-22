function printPattern(numLines, char) {
    var str = '';
    for (var i = 0; i < numLines; i++) {
        str = str + char;
        console.log(str);
    }
}
printPattern(5, "*");
