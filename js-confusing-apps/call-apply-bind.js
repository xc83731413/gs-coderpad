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


const arr = ['john', 'mom'];
Array.prototype.getIterator = function() {
  return this[0];
}
// giving error
// Array.prototype = {
//   getIterator: () => this[0]
// };

console.log(arr.getIterator);
/**
 * arrow functions is unused for object methods
 * https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e
 */

const Dice = {
  sides: 6
};
Dice.prototype = {
  roll: () => this.sides
};

const dice = new Dice();
console.log(dice.roll());
/**
 * arrow functions is unused for object methods
 * https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e
 */

