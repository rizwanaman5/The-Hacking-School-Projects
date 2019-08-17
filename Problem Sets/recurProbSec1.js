// function a(count) {
//     if (count === 10) return 0;
//     console.log(count);
//     b(count++);
// }

// function b(count) {
//     if (count === 10) return 0;

//     console.log(count)
//     a(count++);
// }

// a(0);

// function a(n) {
//     return n ? b(n - 1) : 0;
//   }
//   function b(n) {
//     return n ? a(n - 1) : 0;
//   }
//   a(5);

// function fun(x, y) {
//   if (y == 0) return 0;
//   return x + fun(x, y - 1);
// }

// function fun2(a, b) {
//   if (b == 0) return 1;
//   return fun(a, fun2(a, b - 1));
// }

// console.log(fun2(4, 2));

// function f(n) {
//   if (n <= 1) return 1;
//   if (n % 2 == 0) return f(Math.floor(n / 2));
//   return f(Math.floor(n / 2)) + f(Math.floor(n / 2) + 1);
// }
// console.log(f(11));

// function f(n) {
//   var i = 1;
//   if (n >= 5) return n;
//   n = n + i;
// //   i++;
//   return f(n);
// }
// console.log(f(1));

// function ths(n) {
//   if (n < 1) return;
//   ths(n - 1);
//   ths(n - 3);
//   console.log(n);
// }
// ths(8);

// function f(n) {
//   if (n <= 1) {
//     console.log(n);
//   } else {
//     f(n / 2);
//     console.log(n % 2);
//   }
// }
// f(1024);

// function f(n) {
//   if (Math.floor(n / 2)){
//     f(Math.floor(n / 2));
//   }
//   console.log(n % 2);
// }
// f(1024);

// function count(n) {
//   var d = 1;
//   console.log(n);
//   console.log(d);
//   d++;
//   if (n > 1) count(n - 1);
//   console.log(d);
// }
// count(8);

// function robot(n, a, b) {
//   if (n <= 0) return;
//   robot(n - 1, a, b + n);
//   console.log(n, a, b);
//   robot(n - 1, b, a + n);
// }
// robot(4, 5, 2);
