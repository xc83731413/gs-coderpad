
Array.prototype.setIndex = -1;
Array.prototype.getIterator = function() {
  this.setIndex++;
};
Array.prototype.next = function () {
  return this[this.setIndex];
}

const arr = ['john', 'mom', 'som', 'jhom', 'tom'];
console.log(`calling getIterator, then calling next`);

while(arr.setIndex<arr.length-1){
  arr.getIterator();
  console.log(`${arr.next()}`);
}
