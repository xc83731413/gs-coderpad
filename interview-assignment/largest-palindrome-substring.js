const givenString = 'andnoondon';
const givenString1 = 'constmalayalam';
const givenString2 = 'popdildo';

const checkPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}
const largestSubString = (str) => {
  let lgStr = '', getSubStr = '', tempLgStr = '';
  for(let i=0; i<str.length-1; i++){
    for(let j=i+1; j<str.length; j++){
      getSubStr = str.substr(i, j);
      if(checkPalindrome(getSubStr)){
        tempLgStr = getSubStr;
        if(tempLgStr.length > lgStr.length){
          lgStr = tempLgStr;
        }
      }
    }
  }

  return lgStr;
};

const findLargestStr = ['kaka', 'mama', 'dad', 'mesomosai', 'masima', 'khurtotobon', 'jamaibabu'];

console.log(`${givenString} become: ${largestSubString(givenString)}`);
console.log(`${givenString1} become: ${largestSubString(givenString1)}`);
console.log(`${givenString2} become: ${largestSubString(givenString2)}`);