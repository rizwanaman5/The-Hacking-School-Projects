function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;

  console.log(a);
  console.log(b);
}
// swap(2, 3);

function swap1(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(a);
  console.log(b);
}
// swap1(3, 4);

function swap2(a, b) {
  a = a * b;
  b = a / b;
  a = a / b;

  console.log(a);
  console.log(b);
}
// swap2(4, 5);

function swap3(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  console.log(a);
  console.log(b);
}
// swap3(5, 6);

function swap4(a, b) {
  a = ~(a ^ b);
  b = ~(a ^ b);
  a = ~(a ^ b);

  console.log(a);
  console.log(b);
}
// swap4(6, 7)

function swapArr(arr1, arr2) {
  // swapping the two arrays
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i] ^ arr2[i];
    arr2[i] = arr1[i] ^ arr2[i];
    arr1[i] = arr1[i] ^ arr2[i];
  }
  // filtering out non-Prime numbers...
    const arr1filter = arr1.filter(function check(num) {
            if (num == 1) {
              return false;
            } else {
              for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                  return false;
                }
              }
              return true;
            }
          }
    )

    const arr2filter = arr2.filter(function check(num) {
            if (num == 1) {
                return false;
            } else {
              for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    return false;
                }
              }
              return true;
            }
          }
    )

    console.log(arr1filter);
    console.log(arr2filter);
}
swapArr([1, 2, 3, 4], [5, 6, 7, 8])

  // function swa(arr1, arr2) {
  //   let a = arr1.length;
  //   let b = arr2.length;

  //   if (a > b)

  //     for (let i = 0; i < arr1.length; i++) {
  //       arr1[i] = arr1[i] ^ arr2[i];
  //       arr2[i] = arr1[i] ^ arr2[i];
  //       arr1[i] = arr1[i] ^ arr2[i];
  //     }
  // }
