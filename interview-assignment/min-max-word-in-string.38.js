//iterative way
const findMinMaxStrIteration = (givenStr) => {
  const givenStrAsArr = givenStr.split(' ');
  let minLength = givenStrAsArr[0], maxLength = '';
  for(let i=0; i<givenStrAsArr.length; i++){
    if(givenStrAsArr[i].length > maxLength.length){
      maxLength = givenStrAsArr[i];
    }
    if(minLength.length > givenStrAsArr[i].length ){
      minLength = givenStrAsArr[i];
    }
  }

  return {max: maxLength, min: minLength};
}
;

//sorting way
const findMinMaxBySorting = (givenStr) => {
  const incSortedArr = givenStr.split(' ').sort((a, b) => a.length - b.length);
  const decSortedArr = givenStr.split(' ').sort((a, b) => b.length - a.length);
  return {max: decSortedArr[0], min: incSortedArr[0]};
};


const givenStr = 'This is a test string';
const minMax = findMinMaxStrIteration(givenStr);
console.log(`By Iteration:`);
console.log(`Minimum length word: ${minMax.min} Maximum length word: ${minMax.max}`);

const minMaxSort = findMinMaxBySorting(givenStr);
console.log(`By Js Sorting:`);
console.log(`Minimum length word: ${minMaxSort.min} Maximum length word: ${minMaxSort.max}`)