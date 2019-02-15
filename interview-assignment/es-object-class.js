function Polygon(breath, length){
  this.breath = breath;
  this.length = length;
}

Polygon.prototype.area = function(){
  return this.breath*this.length;
};

Polygon.prototype.printName = function(){
  console.log('I am in polygon!');
};
function Circle(length, breath, radius){
  Polygon.call(this, length, breath);
  this.r = radius;
}

Circle.prototype = Object.create(Polygon.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.printName = function() {
  Polygon.prototype.printName.call();
  console.log('I am in circle');
}

const cir1 = new Circle(5, 6, 10);
//console.log(cir1.hasOwnProperty('area'));
console.log(cir1.area());
cir1.printName();
console.log(Object.getPrototypeOf(Circle.prototype));

/**
 * carrying function
 */

// const carryOperations = (x) => {
//   return (y) => {
//     return (z) => {
//       return x+y+z;
//     }
//   }
// }
const carryOperations = x => y => z => x+y+z;

console.log(`Updated by sum in carring function: ${carryOperations(5)(6)(7)}`);
