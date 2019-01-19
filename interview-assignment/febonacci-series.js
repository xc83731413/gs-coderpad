//recursive way
const febonacciRecursive = (n) => {
  if(isNaN(n)){
    return 'Please provide mman integer value!';
  }
  return n === 1 || n===0 ? 1 : n*febonacciRecursive(n-1);
}

console.log(febonacciRecursive(6));

//iterative way
const febonacciIterative = (n) => {
  let result = 1;
  for(let i=1; i<=n; i++){
    result *= i;
  }
  return result;
};
console.log(febonacciIterative(6));

const febonacciReducer = (n) => {
  //creating natural number array
  const seriesArr = [...Array(n).keys()].map(single => single+1);
  console.log(seriesArr, seriesArr.reduce((acc, num) => acc*num, 1));
};
febonacciReducer(6);