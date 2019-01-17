const givenStr = 'aabcddsbnnebd';
const returnArr = givenStr.split('').map((item, indx, selfArr) => {
  const counter = selfArr.filter((char) => item === char).length;
  const firstIndex = selfArr.indexOf(item);
  return {item: item, counter, firstIndex};
}).filter((item, index, selfArr) => selfArr.map(single => single.item).indexOf(item.item) === index)
.filter(item => item.counter<=1)
.sort((a, b) => a.firstIndex - b.firstIndex);

console.log(returnArr);

/**
 * 
 * https://ilikekillnerds.com/2016/05/removing-duplicate-objects-array-property-name-javascript/
 */