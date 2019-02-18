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
/**
 * 
 * refer to another link
 * https://stackoverflow.com/questions/9122202/prototypal-inheritance-in-js-and-how-to-get-parent-properties
 */

////
////
const ctObj = {
  name: {
    firstName: 'koushik',
    lastName: 'Sadhukhan'
  },
  address: {
    residential: {
      place: 'one',
      streetname: 'mm',
      pinode: '707'
    },
    permanent: {
      place: 'another one',
      streetname: 'mm',
      pinode: '707'
    }
  }
};
let newObj={};
for(single in ctObj){
  cntr++;
  newObj = {...newObj, [single]: ctObj[single]};
}
console.log(newObj);