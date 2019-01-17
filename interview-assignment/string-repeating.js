const givenStr = 'SSSSSTTPPQ';

const newFormattedStr = (str) => {
  const result = [];
  const nonRepeatedChar = str.split('').filter((item, index, selfArr) => selfArr.indexOf(item) === index);
  const charCounterMapper = nonRepeatedChar.map((item, index, selfArr) => {
    const charRepeatCount = str.split('').filter((single) => single === item).length;
    return [...result, charRepeatCount, item];
  });

  return [].concat(...charCounterMapper);
}

console.log(newFormattedStr(givenStr).join(''));