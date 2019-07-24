//using iteration **************************

// function printFibonacci(limit) {
//   let fibonacci = [];
//   fibonacci.push(1, 1);

//   for (let i = 1; i < limit; i++) {
//     fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
//   }

//   console.log(fibonacci);
// }
//     printFibonacci(10)

//using recursion ********************************

function fibNum(a) {
//   console.log(a);
  if (a < 2) {
    return 1;
  } else {
    return fibNum(a - 2) + fibNum(a - 1);
  }
}
console.log(fibNum(10));
