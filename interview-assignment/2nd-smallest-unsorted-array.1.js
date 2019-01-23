const arr = [1, 5, 6, 7, 8, 11, 9, 78, 12, 55, 4];

console.log(`Sorted 2nd smallest element`);

const sortedArr = arr.sort((a, b) => a-b);
console.log(sortedArr[1]);