function Shape(x, y){
  this.x = x;
  this.y = y;
}

Shape.prototype.area = function() {
  return `generic area`;
}

const Circle = new Shape(5, 5);
/**
 * 
 * area can not be updated by this way, inheritance not possible
 */
// Circle.prototype.area = function() {
//   return Math.PI*this.x;
// };
console.log(Circle.area());

function Circle1(x, y, r){
  Shape.call(this, x, y);
  this.r = r;
}
Circle1.prototype = Object.create(Shape.prototype);
Circle1.prototype.constructor = Circle1;
Circle1.prototype.area = function() {
  return Math.floor(Math.PI*this.r);
};
const cr = new Circle1(5,6,7);
console.log(`Circle area is - ${cr.area()}`);