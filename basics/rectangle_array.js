var Rectangle = /** @class */ (function () {
    // Constructor method to initialize the properties
    function Rectangle(l, w) {
        this.length = l; // Property: length of the rectangle
        this.width = w; // Property: width of the rectangle
    }
    // Method to calculate the area of the rectangle
    Rectangle.prototype.calculateArea = function () {
        var area = this.length * this.width; // Area formula: length * width
        return area; // Return the calculated area
    };
    // Method to calculate the perimeter of the rectangle
    Rectangle.prototype.calculatePerimeter = function () {
        var perimeter = 2 * (this.length + this.width); // Perimeter formula: 2 * (length + width)
        return perimeter; // Return the calculated perimeter
    };
    return Rectangle;
}());
// Create an object of the class
var rect = new Rectangle(10, 5);
console.log(rect.calculateArea());
console.log(rect.calculatePerimeter()); // Create a rectangle with length 10 and width 5
