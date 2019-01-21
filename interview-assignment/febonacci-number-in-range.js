const fibonacciNumbersInRange = (inf, sup) => {
  let f1 = 0, f2 = 1, f3=1;
  let resultArr = [];
  while(f1 < sup) {
    if(f1 > inf) {
      resultArr = [...resultArr, f1];
    }
    f1 = f2;
    f2 = f3;
    f3 = f2 + f1;
  }

  return resultArr;
}

const feboArr = fibonacciNumbersInRange(10, 100);
console.log(`Febonacci Series in the range of 10 to 100 is: ${feboArr}`);
console.log(`Number of element inside Febonacci Series in the range of 10 to 100 is: ${feboArr.length}`);