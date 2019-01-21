const arrayBubbleSorting = (givenArr) => {
  const optArr = givenArr.slice(0);
  let tempVar = 0;
  for(let i=0; i<optArr.length; i++){
    for(let j=0; j<(optArr.length - i - 1); j++){
      if(optArr[j] <= optArr[j+1] ){
        tempVar = optArr[j];
        optArr[j] = optArr[j+1];
        optArr[j+1] = tempVar;
      }
    }
  }

  return optArr;
};
const getMean = (unsortedArr) => {
  const sumOfGivenArr = unsortedArr.reduce((acc, item) => acc + item, 0);
  const totalElement = unsortedArr.length;
  return sumOfGivenArr%totalElement === 0 ? (sumOfGivenArr / unsortedArr.length) : (sumOfGivenArr / unsortedArr.length).toFixed(3);
};

const getMedian = (unsortedArr) => {
  const sortedArr = unsortedArr.sort((a, b) => a-b);
  let medianValue = 0;
  if(sortedArr.length % 2 === 0){
    medianValue = (sortedArr[(sortedArr.length / 2) - 1] + sortedArr[(sortedArr.length / 2)]) / 2;
  } else {
    medianValue = sortedArr[(sortedArr.length - 1) / 2];
  }

  return medianValue;
}

const givenArr = [3, 5, 4, 4, 1, 1, 2, 3];

console.log(`Get mean with given array: ${getMean(givenArr)}`);
console.log(`Get median with given array: ${getMedian(givenArr)}`);


///
const sortArray = [12,7,89,9,45,1,13,4,6,75,20];
console.log(`Get sorted array with bubble sorting: ${arrayBubbleSorting(sortArray)}`);
