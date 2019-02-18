var result = [];
for(var i=0; i<5; i++){
  (function(){
    var i1 = i;
    result.push(function(){return i1});
  })();
}

console.log(result[2](), result[4]());

var result1 = [];
for(var i=0; i<5; i++){
  result1.push(function(){return i});
}

console.log(result1[2](), result1[4]());