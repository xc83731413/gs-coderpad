const employeeSet = [
  ['Alia', '-678'],
  ['Bobby','100'],
  ['Alex','223'],
  ['Alex','-23'],
  ['Bobby','723']
];

const filteredArr = employeeSet.filter((item, index, selfArr) => selfArr.map(single => single[0]).indexOf(item[0]) === index);
const newMappedArr = filteredArr.map((item, indx, selfArr) => {
  const indiTotal = employeeSet.reduce((accu, single) => single[0] === item[0] ? accu + (+(single[1])) : accu, 0);
  const itemFrequency = employeeSet.filter((single) => item[0] === single[0]).length;
  return {emp: item[0], indiTotal: Math.floor(indiTotal/itemFrequency), itemFrequency};
}).sort((a, b) => b.indiTotal - a.indiTotal);

console.log(newMappedArr);

console.log(`the Max value is for ${newMappedArr[0].emp} and the avg value is ${newMappedArr[0].indiTotal}`);