function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j+1);  
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}


function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}

//-------------The fuck is this------------------------
// function filterFunc(n) {
//   return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
// }

// function *range(a, b) {
//   for (var i = a; i <= b; ++i) yield i;
// }

// function sumDigPow(a, b) {
//   return Array.from(range(a, b)).filter(filterFunc);
// }