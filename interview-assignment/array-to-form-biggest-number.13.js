const initialArr = [1, 34, 3, 98, 9, 76, 45, 5];
const maxCombinationArr = (arr) => +arr.sort((x, y) => +(''+y+x) - +(''+x+y)).join('');

console.log(maxCombinationArr(initialArr));