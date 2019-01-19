const givenStr = 'I AM A TESTER';
const sentanceReverse = (str) => {
  const strArr = str.split(' ').reverse();
  //const updatedReverseArr = strArr.map(item => item);
  return strArr.join(' ');
};

console.log(sentanceReverse(givenStr));