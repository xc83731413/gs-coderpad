const atMostSum = (givenArr, sum) => {
  let _sum=0, cunt=0, maxCunt=0;
  let subArr = [], tempArr = [];
  const map = {};
  for(let i=0; i<givenArr.length; i++){
    if(_sum + givenArr[i] <= sum) {
      _sum += givenArr[i];
      tempArr = [...tempArr, givenArr[i]];
      cunt++;
      if(maxCunt < cunt && _sum === sum){
        maxCunt = cunt;
        subArr = tempArr.slice(0);
      }
    } else if(_sum != 0) {
      _sum = _sum - givenArr[i-cunt] + givenArr[i];
      tempArr.shift();
      tempArr = [...tempArr, givenArr[i]];
    }
  }

  return {maxCunt, subArr};
};

const atMostSumByReducer = (givenArr, sum) => {
  let dummyArr = [], arraySet = [];
  for(let i=0; i<givenArr.length; i++){
    for(let j=i+1; j<givenArr.length; j++){
      dummyArr = givenArr.slice(i, j);
      if(sum === dummyArr.reduce((acc, item) => acc+item, 0)){
        arraySet = [...arraySet, dummyArr];
      }
    }
  }
  return arraySet.reduce((prev, current) => (prev.length>current.length) ? prev : current, []);
}

let givenArr = [10, 5, 2, 7, 1, 9];
let givenSum = 15;
let result = atMostSum(givenArr, givenSum);
console.log(`Longest subarray from ${givenArr} is: ${result.subArr} as array and max count ${result.maxCunt}`);

givenArr = [1, 2, 1, 0, 1, 1, 0], givenSum = 4;
result = atMostSum(givenArr, givenSum);
console.log(`Longest subarray from ${givenArr} is: ${result.subArr} as array and max count ${result.maxCunt}`);
console.log(`Longest subarray from ${givenArr} is: ${atMostSumByReducer(givenArr, givenSum)}`);

givenArr = [-5, 8, -14, 2, 4, 12], givenSum = -5;
result = atMostSum(givenArr, givenSum);
console.log(`Longest subarray from ${givenArr} is: ${result.subArr} as array and max count ${result.maxCunt}`);

console.log(atMostSumByReducer(givenArr, givenSum));