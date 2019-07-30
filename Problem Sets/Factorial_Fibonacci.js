// using recursion

function factorial(a) {
    return ((a > 1) ? a * factorial(a - 1) : 1);
}
// console.log(factorial(5))

// using iteration ***********************

var x = 1;
function fact(num) {
    if (num < 2) {
        return 1;
    } else {
        for (let i = 2; i <= num; i++) {
            x = x * i;
        } console.log(x)
    }
}
// fact(5)

//using iteration **************************

function printFibonacci(limit) {
    let fibonacci = [];
    fibonacci.push(1, 1);

    for (let i = 1; i < limit; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }

    console.log(fibonacci);
}
// printFibonacci(10);

//using recursion ********************************

function fibNum(a) {
    if (a < 2) {
        return 1;
    } else {
        return fibNum(a - 2) + fibNum(a - 1);
    }
}
console.log(fibNum(10));



