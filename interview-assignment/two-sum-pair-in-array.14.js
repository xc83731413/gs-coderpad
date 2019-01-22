/**
 * https://wsvincent.com/javascript-two-sum-find-all-pairs-match-target-value/
 */
const towSumPair = (arr, target) => {
  const map ={}, results=[];
  for(let i=0; i<arr.length; i++) {
    if(map[arr[i]] !== undefined){
      results.push([map[arr[i]], arr[i]]);
    } else {
      map[target - arr[i]] = arr[i];
    }
  }
  console.log(map);
  return results;
}

const arr = [7, 0, -4, 5, 2, 3];
console.log(towSumPair(arr, 5));