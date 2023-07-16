// Abstract Classes: not-ready class.
// Abstract Methods only inside abstract classes.

abstract class shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class circle extends shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  override render(): void {
    console.log("rendering circle");
  }
}

// const s1 = new shape("red");
const c1 = new circle("blue", 3);
c1.render();
