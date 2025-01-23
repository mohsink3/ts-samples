class Car {
    // properties
    brand:string; // Property: brand of the car
    model:string; // Property: model of the car
    year:number;  // Property: year of the car
  
    // Constructor method to initialize the properties
    constructor(br:string, mo:string, yr:number) {
      this.brand = br; // Initialize brand
      this.model = mo; // Initialize model
      this.year = yr;  // Initialize year
    }
  
    // Method to display the details of the car
    displayDetails():void{
      console.log(`This car is a ${this.brand} ${this.model} ${this.year}.`); // Log the car details
    }
  }
  
  // Create an object of the class
  let myCar = new Car("Toyota", "Corolla", 2021);
  myCar.displayDetails(); // Create a car with brand "Toyota", model "Corolla", and year "2025"