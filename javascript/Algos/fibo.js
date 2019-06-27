// Fibonacci series --> 0 1 1 2 3 5 8 13 21 33...
let log = console.log;

function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.pop();
}

let funcCallsRecursive = 0;
function fibR(n) {
  funcCallsRecursive++;
  if (n < 2) {
    return n;
  }
  return fibR(n - 1) + fibR(n - 2);
}

// log(fibR(30));
// log("No of function calls - ", funcCallsRecursive);

let cache = {};
function fibDynamic(n) {
  if (cache[n]) {
    return cache[n];
  } else {
    if (n < 2) {
      cache[n] = n;
      return n;
    }
    cache[n] = fibDynamic(n - 1) + fibDynamic(n - 2);
    return cache[n];
  }
}
//By not poluting the global space & using closures
function fibMaster() {
  let cache = {};
  return function fib(n) {
    log(cache);
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        cache[n] = n;
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

log(fibMaster()(7));
// log(cache);
