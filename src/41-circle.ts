export {};

/**
 * The good ol' this.. Possibly the most confusing topic in the whole language
 * and one that interviewers often use to make you (me) feel miserable in interviews 😭
 * If you find the docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * also confusing, try some of these resources:
 *  - https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
 *  - https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
 *  - https://www.youtube.com/watch?v=Pi3QC_fVaD0 (JavaScript this Keyword Explained In 3 Minutes)
 *  - https://www.youtube.com/watch?v=YOlr79NaAtQ (What is THIS in JavaScript? in 100 seconds)
 * 
 * 
 * transformed to class cuz it's 'modern and flexible'
 * constructor is responsible for initializing the object's properties
 * when new objective is created using 'new' constructor will be called
 * 
 * Area of a circle = pi * (radius) pow 2
 * Perimeter of a circle = 2 * pi * radius
 */

class Circle {

  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    const area = Math.PI * Math.pow(this.radius, 2);
    return parseFloat(area.toFixed(2));
  }
  perimeter(): number {
    const perimeter = 2 * Math.PI * this.radius;
    return parseFloat(perimeter.toFixed(2));
  }
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85


/**
 * This was the last exercise in this repository.
 * Congratulations on getting this far!
 */
