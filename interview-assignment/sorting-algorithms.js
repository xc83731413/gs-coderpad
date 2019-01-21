const arrayBubbleSorting = (givenArr) => {
  const optArr = givenArr.slice(0);
  let tempVar = 0;
  for(let i=0; i<optArr.length; i++){
    for(let j=0; j<(optArr.length - i - 1); j++){
      if(optArr[j] >= optArr[j+1] ){
        tempVar = optArr[j];
        optArr[j] = optArr[j+1];
        optArr[j+1] = tempVar;
      }
    }
  }

  return optArr;
};

const mergeSortImplementation = (unsortedArr) => {
  if(unsortedArr.length === 1){
    return unsortedArr;
  }
  const middle = Math.floor(unsortedArr.length / 2);
  const leftPart = unsortedArr.slice(0, middle);
  const rightPart = unsortedArr.slice(middle);
  return mergeSort(mergeSortImplementation(leftPart), mergeSortImplementation(rightPart));
};

const mergeSort = (leftPart, rightPart) => {
  let result = [], indexLeft = 0, indexRight = 0;
  while(indexLeft < leftPart.length && indexRight < rightPart.length) {
    if(leftPart[indexLeft] <= rightPart[indexRight]) {
      result = [...result, leftPart[indexLeft]];
      indexLeft++;
    } else {
      result = [...result, rightPart[indexRight]];
      indexRight++;
    }
  }

  return result.concat(leftPart.slice(indexLeft)).concat(rightPart.slice(indexRight));
}

///
const sortArray = [12,7,89,9,45,1,13,4,6,75,20];
console.log(`Get sorted array with bubble sorting: ${mergeSortImplementation(sortArray)}`);

const sortArray1 = [12,7,89,9,45,1,13,4,6,75,20];
console.log(`Get sorted array with merge sorting: ${arrayBubbleSorting(sortArray1)}`);