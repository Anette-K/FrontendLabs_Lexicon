class Circle {
    constructor(radius) {
        this.radius = radius;  
    }

    get diameter() {
        return 2 * this.radius;
    }
    set diameter(d) {
        this._diameter = d;
        this.radius = d / 2;
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2);
    }


}
let c = new Circle(2);
console.log(c.radius);
console.log(c.diameter);
console.log(c.area());
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);
