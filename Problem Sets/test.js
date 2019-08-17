// prints {bar: hello} ********************
// function f1() 
// { 
//     return {
//         bar: "hello"
//     };
// }
// console.log(f1())

// prints 'undefined' **********************
// function f2() 
// { 
//     return 
//     {
//         bar: "hello"
//     };
// }
// console.log(f2())

// prints '1 4 3 2'  ***********************
// (function () {
//     console.log(1);
//     setTimeout (function() {console.log(2)}, 1000);
//     setTimeout (function() {console.log(3)}, 0);
//     console.log(4);
// })();

// prints 'After setTimeout' first *********************
// function foo() {
//     console.log('foo has been called');
//   }
//   setTimeout(foo, 0);
//   console.log('After setTimeout');


// prints 'foo has been called' first *******************
// (function () { 
//     setTimeout(function() {console.log('After setTimeout')}, 0);

//     console.log('foo has been called');
//   })()


// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   } 

//   var myFunc = makeFunc();
//   myFunc();


// prints the factorial of the input ************************
// console.log(( function f(n) {return ((n > 1) ? n * f(n-1) : n)}) (10));


// prints the value of the variable x **********************
// (function (x) {
//     return (function (y) {
//         console.log(x);
//     }) (2)
// }) (1);


// (function () {
//     try {
//         throw new Error ();
//     } catch(x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// }) ();

// var b = 1;
// function outer () {
//     var b = 2
//     function inner () {
//         b++;
//         var b = 3;
//         console.log(b)
//     }
//     inner ()
// }
// outer ();


// x = foo bar undefined but y = bar undefined (why????) *****************
// var y = `bar ${x}`, x = `foo ${y}`
// console.log(y);
// console.log(x);


// var a = (1, 5 - 1) * 2
// console.log(a)

// var x = 21;
// var a = function () {
//     console.log(x);
//     var x = 20;

// };
// a ();