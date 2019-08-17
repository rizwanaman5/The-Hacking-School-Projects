function identical(x, y) {
    var xNegZero = Neg(x)
    var yNegZero = Neg(y)

    if(xNegZero || yNegZero){ 
      return xNegZero && yNegZero
    }
    else if (Number.isNaN(x) && Number.isNaN(y)) { // checking is both are NaN
        return true} 
    else if ( x === y) { // checking if both values are same
        return true}
    else {return false}  // false if the two values are not same
   
    function Neg(v) {
        if ( v == 0 && 1/v == -Infinity) { // function to check -0
            return true }
        else{return false}
    }
 
}

// tests:
console.log(identical(42, 42) === true);
console.log(identical('foo', 'foo') === true);
console.log(identical(false, false) === true);
console.log(identical(null, null) === true);
console.log(identical(undefined, undefined) === true);
console.log(identical(NaN, NaN) === true);
console.log(identical(-0, -0) === true);
console.log(identical(0, 0) === true);

console.log(identical(-0, 0) === false);
console.log(identical(0, -0) === false);
console.log(identical(0, NaN) === false);
console.log(identical(NaN, 0) === false);
console.log(identical(42, '42') === false);
console.log(identical('42', 42) === false);
console.log(identical('foo', 'bar') === false);
console.log(identical(false, true) === false);
console.log(identical(null, undefined) === false);
console.log(identical(undefined, null) === false)