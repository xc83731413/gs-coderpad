const anagarmGrouping = (strArr) => {
  const map = {};
  let pairArr = [];
  let singleElm = '';
  for(let i=0; i<strArr.length; i++){
    singleElm = strArr[i].toLowerCase().split('').sort().join('');
    if(map[singleElm] !== undefined){
      pairArr = [...pairArr, [map[singleElm], strArr[i]]];
    } else {
      map[singleElm] = strArr[i];
    }
  }

  return pairArr;
};

const givenArr = ['aba', 'ccd', 'nop', 'cdc', 'aab'];
console.log(`given array is `, givenArr ,`, output: `, anagarmGrouping(givenArr));

const givenArr1 = ['mamoni', 'kosasi', 'Nope', 'noimam', 'Sasiok', 'pone'];
console.log(`given array is `, givenArr1 ,`, output: `, anagarmGrouping(givenArr1));