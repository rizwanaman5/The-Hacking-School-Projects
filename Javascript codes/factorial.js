// using recursion

function factorial(a) {
    return ((a > 1) ? a * factorial(a - 1) : 1);
}

console.log(factorial(5));