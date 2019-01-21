//recursive way
const febonacciRecursive = (n) => {
  if(isNaN(n) || n<0){
    return 'Please provide mman integer value!';
  }
  if( n === 0) {
    return 0;
  }
  if(n===1){
    return 1;
  }
  return febonacciRecursive(n-1)+febonacciRecursive(n-2);
}
const feboMap = (n) => {
  const returnFeboArr = new Array(n).fill(0);

  return returnFeboArr.map((item, index) => febonacciRecursive(index)); //1st element as 0
  // return returnFeboArr.map((item, index) => febonacciRecursive(index+1)); // 1st element as 1

}
console.log(feboMap(6));

//iterative way
const febonacciIterative = (n) => {
  const f2=1, returnArr = new Array(n).fill(0);
  for(let i=0; i<n; i++){
    if(i===1){
      returnArr[i] = f2;
    }
    if(i>1){
      returnArr[i] = returnArr[i-1] + returnArr[i-2];
    }
  }
  return returnArr;
};
console.log(febonacciIterative(6));

// const febonacciReducer = (n) => {
//   //creating natural number array
//   const seriesArr = [...Array(n).keys()].map(single => single+1);
//   console.log(seriesArr, seriesArr.reduce((acc, num) => acc*num, 1));
// };
// febonacciReducer(6);