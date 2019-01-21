const stack1 = [];
const enqueueAdd = (elem) => {
  stack1.push(elem);
  console.log(`Inserted element: ${elem}`);
}
const enqueuePop = (entireQueue) => {
  const firtsInsertedElem = entireQueue.shift();
  return firtsInsertedElem;
}

enqueueAdd(5);
enqueueAdd(6);
enqueueAdd(9);
enqueueAdd(11);
enqueueAdd(50);

console.log(`${stack1} - enqueuePop(stack1): ${enqueuePop(stack1)}, after operation stack become: ${stack1}`);