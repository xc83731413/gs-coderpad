const repeatedWord = (sentance) => {
  const wordArr = sentance.split(' ');
  const repeatedArr = wordArr.filter((item, index, _self) => _self.indexOf(item) !== index);
  return repeatedArr.length > 0 ? repeatedArr[0] : 'No repeated item found';
};

const givenSentance = 'Ravi had been saying that he had been there';
console.log(repeatedWord(givenSentance));

const givenSentance2 = 'Ravi is not a bad guy';
console.log(repeatedWord(givenSentance2));