// Write a program to given input Check whether  Even or odd.
function check(num) {
  if (num > 1) {
    num = num - 2;
    check(num);
  } else if (num == 1) {
    console.log("odd");
  } else {
    console.log("even");
  }
}

// Write a program to Generate Even and Odd Number less than N
function print(num, oddOrEven) {
  for (let x = 0; x <= num; x++) {
    if (oddOrEven == "even") {
      if (x % 2 == 0) {
        console.log(x);
      }
    } else {
      if (x % 2 == 1) {
        console.log(x);
      }
    }
  }
}

// Generate ‘N’ Even and Odd Numbers.
function printNum(num, oddOrEven) {
  let s = oddOrEven == "odd" ? 1 : 0;
  for (let i = s; i <= num * 2; i += 2) {
    console.log(i);
  }
}

// Write a program to decide given N is Prime or not.
function check(num) {
  if (num == 1) {
    console.log('Not a Prime Number');
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        console.log("Not a Prime Number");
        return;
      }
    }
    console.log("is Prime");
  }
}
check(1);

//  Write a program to subtract two integers without using Minus (-) operator
// subtracting a from b.........
function sub(a, b) {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      switch (a + i) {
        case b:
          console.log(i);
      }
    }
  } else {
    for (let i = b; i <= a; i++) {
      switch (b + i) {
        case a:
          console.log(i * (-1));
      }
    }
  }
}

// Write a program to find remainder of two numbers without using modulus (%) operator 
// Dividing a by b...........
function mod(a, b) {
  if (b > a) {
    console.log(a);
  } else {
    console.log(a - (b * Math.floor(a / b)));
  }
}

// Write a program to generate Prime  Numbers less than N.
function generatePrime(num) {
  var isPrime;
  for (let i = 2; i <= num; i++) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
// and Generate ‘N’ Prime Numbers in given range.        **NOT DONE*************************************
function printNPrime() {

}

// Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) using recursion.
function hcf(a, b) {
  if (a == 0) {
    return b;
  } else if (b == 0) {
    return a;
  } else if (a > b) {
    return hcf(b, a % b);
  } else {
    return hcf(a, b % a);
  }
}

// Write a program find GCD of the array elements given an array of numbers
function hcfArr(arr) {
  function hcf(a, b) {
    if (a == 0) {
      return b;
    } else if (b == 0) {
      return a;
    } else if (a > b) {
      return hcf(b, a % b);
    } else {
      return hcf(a, b % a);
    }
  }

  let a = hcf(arr[0], arr[1])
  for (let i = 2; i < arr.length; i++) {
    a = hcf(a, arr[i])
  } console.log(a)
}

// Write a program given an array of ‘N’ numbers, find LCM of it.
function lcmArr(arr) {
  function max(arr) {
    let count = arr[0]
    for (i = 0; i < arr.length; i++) {
      if (count < arr[i]) {
        count = arr[i]
      }
    }
    return count;
  }

  let a = max(arr);

  for (let i = 0; i < arr.length; i++) {

  }
}


// Write a program to find the Sum of Array Elements. 
function sumArray(arr) {
  let a = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    a = a + arr[i];
  } console.log(a);
}

// Write a  program for swapping of two arrays
function swapArrays(arr1, arr2) {
  let a = arr1;
  let b = arr2;
  let c;

  c = a;
  a = b;
  b = c;

  console.log('arr1 =', a);
  console.log('arr2 =', b)
}

// Write a program to find the maximum number in an array using function
function max(array) {
  let count = array[0]
  for (i = 0; i < array.length; i++) {
    if (count < array[i]) {
      count = array[i]
    }
  }
  console.log(count)
}

// Write a program to find Median of the given Array? WORKS ONLY FOR ORDERED ARRAYS
function med(arr) {
  let a = arr.length;
  if (a % 2 == 1) {
    console.log(arr[(a - 1) / 2]);
  } else {
    console.log((arr[a / 2] + arr[(a - 2) / 2]) / 2);
  }
}



// Write a program to find the roots of a quadratic equation 
// function findRoots(xSquare, x, constant) {
//   console.log('Root 1 :', ((-1 * x + Math.sqrt((x ^ 2) - (4 * xSquare * constant))) / 2 * xSquare))
//   console.log('Root 2 :', ((-1 * x - Math.sqrt((x ^ 2) - (4 * xSquare * constant))) / 2 * xSquare))
// }
// findRoots(1, 0, -4)


