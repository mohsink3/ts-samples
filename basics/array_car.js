var Car = /** @class */ (function () {
    // Constructor method to initialize the properties
    function Car(br, mo, yr) {
        this.brand = br; // Initialize brand
        this.model = mo; // Initialize model
        this.year = yr; // Initialize year
    }
    // Method to display the details of the car
    Car.prototype.displayDetails = function () {
        console.log("This car is a ".concat(this.brand, " ").concat(this.model, " ").concat(this.year, ".")); // Log the car details
    };
    return Car;
}());
// Create an object of the class
var myCar = new Car("Toyota", "Corolla", 2021);
myCar.displayDetails(); // Create a car with brand "Toyota", model "Corolla", and year "2025"
