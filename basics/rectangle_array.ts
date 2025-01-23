class Rectangle {
    length:number;
    width:number;
    // Constructor method to initialize the properties
    constructor(l:number,w:number) {
      this.length = l; // Property: length of the rectangle
      this.width = w;   // Property: width of the rectangle
    }
  
    // Method to calculate the area of the rectangle
    calculateArea():number {
      let area:number = this.length * this.width; // Area formula: length * width
      return area; // Return the calculated area
    }
  
    // Method to calculate the perimeter of the rectangle
    calculatePerimeter():number {
      let perimeter:number = 2 * (this.length + this.width); // Perimeter formula: 2 * (length + width)
      return perimeter; // Return the calculated perimeter
    }
  }
  
  // Create an object of the class
  const rect = new Rectangle(10, 5);
  console.log(rect.calculateArea());
  console.log(rect.calculatePerimeter()); // Create a rectangle with length 10 and width 5