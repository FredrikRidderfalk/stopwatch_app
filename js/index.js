// Every object in JavaScript has a property called constructor, and that references the function that was used to construct or create that object.

// Factory Function (my preferred way of creating an object me thinks). What makes it a factory function is that something is returned inside the function.
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constructor Function (the preferred way of creating an object for people coming from C++ and Java cause it looks similar to creating a class)
function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);

// another change
