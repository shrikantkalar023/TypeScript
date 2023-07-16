"use strict";
class shape {
    constructor(color) {
        this.color = color;
    }
    render() { }
}
class circle extends shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("rendering circle");
    }
}
const s1 = new shape("red");
const c1 = new circle("blue", 3);
c1.render();
//# sourceMappingURL=index.js.map