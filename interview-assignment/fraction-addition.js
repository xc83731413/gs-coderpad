//simplification way

const gratestCommonFactor = (a, b) => {
  return b != 0? gratestCommonFactor(b, a%b) : a;
};

const leastCommonMean = (a, b) => {
  return ((a*b)/gratestCommonFactor(a, b));
};
// Input fractions to add ////////////////////////////////
// Fraction 1 = 2/6
let fraction1Numerator = 2;
let fraction1Denominator = 6;

// Fraction 2 = 1/2
let fraction2Numerator = 1;
let fraction2Denominator = 2;
let resultString = `${fraction1Numerator}/${fraction1Denominator} + ${fraction2Numerator}/${fraction2Denominator} =`;
////////////////////////////////////////////////////////////////

const multiplier = leastCommonMean(fraction1Denominator, fraction2Denominator);
fraction1Numerator *= (multiplier/fraction1Denominator);
fraction2Numerator *= (multiplier/fraction2Denominator);

const sumFractionNumerator = fraction1Numerator + fraction2Numerator;
resultString += `${sumFractionNumerator}/${multiplier}`;
console.log(`${resultString}`);

///using math functions
// Input fractions to add ////////////////////////////////
// Fraction 1 = 2/6
const math = require('mathjs');
fraction1Numerator = 2;
fraction1Denominator = 6;

// Fraction 2 = 1/2
fraction2Numerator = 1;
fraction2Denominator = 2;

const givenObj = math.add(math.fraction(fraction1Numerator, fraction1Denominator), math.fraction(fraction2Numerator, fraction2Denominator));
console.log(`${givenObj.n}/${givenObj.d}`);

