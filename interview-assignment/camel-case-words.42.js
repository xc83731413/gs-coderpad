const generateCamelCaseWord = (sentance) => {
  const wordsArr = sentance.split(' ');
  return wordsArr.map(item => item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()).join('');
};

const givenSentance = 'I am the sapient guy';
console.log(generateCamelCaseWord(givenSentance));