class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    //is a property..
    //calcArea1 = () => this.width * this.height; // Arrow function not suitable for methods apparently, because of lacking their own "this"
    
    //normal method
    calcArea() {
        return this.width * this.height;
    } 
}
let rect = new Rectangle(4,5,'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
