var sales = [];
// Add sales amounts to the array using push and unshift
sales.push(1000, 2000, 3000); // adds 1000, 2000, 3000 to the end of the array
sales.unshift(500); // adds 500 to the beginning of the array
// Remove the last element from the array and store it in lastSales
var lastSales = sales.pop(); // removes 3000 from the end of the array
console.log("Last element =>" + lastSales); // outputs 'Last element =>3000'
// Initialize a variable to accumulate the total sales
var totalSales = 0;
// Loop through the sales array to calculate the total sales
for (var i = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i]; // accumulate the total sales
    //console.log(totalSales); // output the running total after each addition
}
// Output the sales array and the total sales to the console
console.log(sales); // outputs the updated sales array
console.log();
console.log("Total sales = ".concat(totalSales)); // outputs the total sale
