const decreasingOrderSort = (givenString) => {
  return givenString.split('').sort((a,b)=>b.localeCompare(a)).reverse().join('');
  //return givenString.split('').sort().reverse().join('');
}

console.log(`Given string: mupursingh and output will be: ${decreasingOrderSort('mupursingh')}`);