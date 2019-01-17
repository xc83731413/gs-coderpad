const ArrayRotation = ( initialArr=[], rows=0, columns=0, flag=0) => {
  let returnArr = [];
  if(flag === 0) {
    const reverseRow = initialArr.map((item) => item.reverse());
    returnArr = reverseRow.map((col, index, self) => self.map(row => row[index]));
  }
  if(flag === 1) {
    const tasposeArray = initialArr.map((col, index, self) => self.map(row => row[index]));
    returnArr = tasposeArray.map((item) => item.reverse());
  }
  return returnArr;
};
const PrintArray = (givenArr) => {
  let elementFormat = '';
  console.log(`============`);
  for(let i=0; i < givenArr.length; i++) {
    elementFormat = givenArr[i].join('   ');
    console.log(`${elementFormat}`);
  }
  console.log(`============`);
  return true;
}

console.log(`Array rotation based on the gflag value... 0 = right to left and 1=left to right `);
let arr=[[2, 1], [3, 4]], rows = 2, columns = 2, flag = 0;
console.log(`The Given Array 1:`);
PrintArray(arr);
console.log(`updated flag = 0, i.e. Right2Left`);
console.log(`The required formatted array.`);
PrintArray(ArrayRotation(arr, rows, columns, flag));
console.log(`The Given Array 2:`);
PrintArray(arr);
console.log(`updated flag = 1, i.e. Left2Right`);
console.log(`The required formatted array.`);
PrintArray(ArrayRotation(arr, rows, columns, 1));

/**
 * ======
 */
arr=[[7, 9, 4], [1, 3, 5], [2, 6, 8]];
rows = columns = 3; flag = 0;
console.log(`The Given Array 3:`);
PrintArray(arr);
console.log(`updated flag = 0, i.e. Right2Left`);
console.log(`The required formatted array.`);
PrintArray(ArrayRotation(arr, rows, columns, flag));
console.log(`The Given Array 4:`);
PrintArray(arr);
console.log(`updated flag = 1, i.e. Left2Right`);
console.log(`The required formatted array.`);
PrintArray(ArrayRotation(arr, rows, columns, 1));