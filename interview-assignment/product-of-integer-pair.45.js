const sumOfProducts = (givenArr) => {
  let consistResultArr = [], tempArr = [];
  for(let i=0; i<givenArr.length-1; i++){
    for(let j=i+1; j<givenArr.length; j++){
      consistResultArr = [...consistResultArr, [givenArr[i], givenArr[j]]];
    }
  }

  return consistResultArr.map(item => item[0]*item[1]).reduce((acc, item) => acc+item, 0);
}

const givenArr = [1, 3, 4];
console.log(sumOfProducts(givenArr));