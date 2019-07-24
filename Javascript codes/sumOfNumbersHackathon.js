function add(a, b) {
  let num1 = a;
  let num2 = b;
  let sumArr = [];
  let carry = 0;

    if (num1.length > num2.length) {
    num2 = num2.padStart(num1.length, '0')
    } else {
    num1 = num1.padStart(num2.length, '0')
    }

//   console.log(num1);
//   console.log(num2);

  // spliting the numbers

  let number1 = num1.toString().split("");
  let digitsOf1 = number1.map(Number);
//   console.log(digitsOf1);
  //digitsOf1 is an array containing the digits of a

  let number2 = num2.toString().split("");
  let digitsOf2 = number2.map(Number);
//   console.log(digitsOf2);
  //digitsOf2 is an array containing the digits of b

  // this is where the addition happens ********************
  for (let i = digitsOf1.length - 1; i >= 0; i--) {
    let sumOfDigits = digitsOf1[i] + digitsOf2[i] + carry;

    if (sumOfDigits >= 10) {
      carry = 1;
    } else {carry = 0}

    sumArr.unshift(sumOfDigits % 10);

    if (i == 0) {
      sumArr.unshift(carry);
    }
  }

  result = sumArr.join("");

//   console.log(sumArr);
  console.log(result);
}
add("11111111","21");   