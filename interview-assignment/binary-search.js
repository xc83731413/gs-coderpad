let arr = [1, 3, 5, 7, 8, 9]; 
let x = 5;

const binarySearchRecursion = (arr, x, start, end) => {
  if(start > end)
    return false;
  let midIndx = Math.floor((start+end)/2);
  if(arr[midIndx] === x)
    return true;

  if(arr[midIndx] > x)
    binarySearchRecursion(arr, x, start, midIndx-1);
  if(arr[midIndx] < x)
    binarySearchRecursion(arr, x, midIndx+1, end);
};

if(binarySearchRecursion(arr, x, 0, arr.length-1)) {
  console.log(`Key Found: ${x}`);
} else {
  console.log(`Key not found: ${x}`);
}

const y=30;
if(binarySearchRecursion(arr, y, 0, arr.length-1)) {
  console.log(`Key Found: ${y}`);
} else {
  console.log(`Key not found: ${y}`);
}