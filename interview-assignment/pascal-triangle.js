const createPascalTriangle = (rows) => {
  const resultArr = new Array(rows);
  for(let i=0; i<rows; i++){
    resultArr[i] = [];
    for(let j=0; j<i+1; j++){
      if(j===0 || j === i){
        resultArr[i][j] = 1;
      } else {
        resultArr[i][j] = resultArr[i-1][j-1] + resultArr[i-1][j];
      }
    }
  }

  return resultArr;
}

const printPascalTri = (pascalArr) => {
  let updateString = '';
  for(let i=0; i<pascalArr.length; i++) {
    for(let j=0; j< pascalArr[i].length; j++){
      updateString += (pascalArr[i][j] && pascalArr[i][j] != '') ? ` ${pascalArr[i][j]} ` : '';
    }
    console.log(`${updateString}`);
    updateString = '';
  }
}

const createNewPascal = createPascalTriangle(6);
printPascalTri(createNewPascal);