const letterSet = 'abcdefghijklmnopqrstuvwxyz';

const pangramMissingCharacter = (givenSentence) => {
  let bufLetterSet = letterSet;
  for(let i=0; i<givenSentence.length; i++){
    if(bufLetterSet.indexOf(givenSentence[i])){
      bufLetterSet = bufLetterSet.replace(givenSentence[i], '');
    }
    if(bufLetterSet.length === 0){
      return 'This is Pangram';
    }
  }
  if(bufLetterSet.length > 0){
    return `missing character(s) in the sentance: ${bufLetterSet.split('').join(',')}`;
  }
};
const givenSentence = 'The quick brown fox jumps';
const newSentance = 'welcome to geeksforgeeks';
console.log(pangramMissingCharacter(givenSentence));
console.log(pangramMissingCharacter(newSentance));

const commandLine = process.argv.slice(2);
if(Array.isArray(commandLine) && commandLine.length > 0){
  console.log(pangramMissingCharacter(commandLine[0]));
}
