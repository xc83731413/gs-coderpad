const arrayDotProduct = (singleDimArr1, singleDimArr2) => {
  let len = Math.min(singleDimArr1.length, singleDimArr2.length);
  let calcLen = len;
  if(singleDimArr1.length != singleDimArr2.length) {
    calcLen = Math.max(singleDimArr1.length, singleDimArr2.length);
  }
  const unitArr = new Array(calcLen-len).fill(1);
  const UpdatedArr = (singleDimArr1.length > singleDimArr2.length) ? [...singleDimArr2, ...unitArr] : [...singleDimArr1, ...unitArr];
  const multiplierArr = (singleDimArr1.length > singleDimArr2.length) ? [...singleDimArr1] : [...singleDimArr2];

  //return {UpdatedArr, multiplierArr};
  return UpdatedArr.map((item, index) => item*multiplierArr[index]);
};

let givenArr1 = [1,2,3,4,5];
let givenArr2 = [6,7,8,9,10,11,12,13,14,15];
console.log(arrayDotProduct(givenArr1, givenArr2));

givenArr1 = [1,2,3,4,5];
givenArr2 = [1,2,3,4,5];
console.log(arrayDotProduct(givenArr1, givenArr2));

givenArr1 = [6,7,8,9,10,11,12,13,14,15];
givenArr2 = [10,20,30,40,50];
console.log(arrayDotProduct(givenArr1, givenArr2));