/**
 * inspired from
 * https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript
 */
var func = function() {
    console.log(this)
}.bind(1);
 
 var obj = {
    callFun : func
 }
//obj.callFun.func(); //will give error
//obj.callFun(); will work

var zipcode = {
  checkZipcode : function() {
      console.log(this);
      function updateZipCode() {
          console.log(this);
      }
      updateZipCode.call(this);
  }
}
//zipcode.checkZipcode();

/**
 * 
 * creating own js array functions and use it
 * getIterator with get single element
 * then next method will return the element
 */
const arr = ['john', 'mom'];
Array.prototype.setIndex = -1;
Array.prototype.getIterator = function() {
  this.setIndex++;
};
Array.prototype.next = function () {
  return this[this.setIndex];
}
arr.getIterator();
console.log(`calling getIterator, then calling next- ${arr.next()}`)
// giving error
// Array.prototype = {
//   getIterator: () => this[0]
// };
// Arrow functions dose not have prototype property

//console.log(arr.getIterator());

/**
 * arrow functions is unused for object methods
 * https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e
 */

const Dice = {
  sides: 6,
  roll: function() {
    var foo = () => {console.log(this.sides);}
    foo();
    return this;
  },
  mole: () => this.sides+1
};
// Dice.prototype = {
//   roll: () => this.sides
// };
console.log(Dice.roll());
// const nep = Dice.mole.bind(Dice);
// console.log(nep());
/**
 * arrow functions is unused for object methods
 * https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e
 * https://medium.com/tech-tajawal/javascript-this-4-rules-7354abdb274c
 */

 /**
  * constructor function
  * https://www.phpied.com/3-ways-to-define-a-javascript-class/
  */
function Shape(sides) {
  this.sides = sides;
}
Shape.prototype.makeUpdatedSide = function () {
  return this.sides+1;
}

var rectangle = new Shape(3);
var hexagoin = new Shape(5);
var rc = hexagoin.makeUpdatedSide.bind(rectangle);
var rc2 = rectangle.makeUpdatedSide.bind(hexagoin);
console.log(hexagoin);
console.log(`hexagon then bind to rectriangle - ${rc()}`);
console.log(`rectriangle then bind to hexagon - ${rc2()}`);

var car = {
  type: 'Toyota',
  registrationNumber: 'WB 34AC 1314',
  fuleCapacity: '37L',
  getCarName: function(ownName = 'koushik') {
    return `${ownName} has a register car of type ${this.type} with registration number ${this.registrationNumber}`;
  }
}

const fuelTankCapacity = function() {
  return `Fuel Tank capacity is - ${this.fuleCapacity}`;
};

// const fuelTankCapacity = () => {
//   return `Fuel Tank capacity is - ${this.fuleCapacity}`;
// };

console.log(car.getCarName())
const newCarDetails = car.getCarName.bind(car, 'Babule');
console.log(newCarDetails());

// const fCap = fuelTankCapacity.bind(car);
// console.log(fCap());
console.log(fuelTankCapacity.bind(car)());





