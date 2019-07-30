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

generatePrime(50);
// Prints the numbers onto an array


// function generatePrime(num) {
//     let arr =[];
//     var isPrime;
//     for (let i = 2; i <= num; i++) {
//         isPrime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             arr.push(i);
//         } 
//     } console.log(arr);
// }



