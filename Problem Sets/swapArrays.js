function swapArr(arr1, arr2) {
    let a = arr1.length;
    let b = arr2.length;
    // swapping the two arrays
    if (a > b) {
        for (let i = 0; i < arr1.length; i++) {
            arr1[i] = arr1[i] ^ arr2[i];
            arr2[i] = arr1[i] ^ arr2[i];
            arr1[i] = arr1[i] ^ arr2[i];
        }
        arr1.splice(a - (a - b))
    } else if (b > a) {
        for (let i = 0; i < arr2.length; i++) {
            arr1[i] = arr1[i] ^ arr2[i];
            arr2[i] = arr1[i] ^ arr2[i];
            arr1[i] = arr1[i] ^ arr2[i];
        }
        arr2.splice(b - (b - a))
    } else {
        for (let i = 0; i < arr1.length; i++) {
            arr1[i] = arr1[i] ^ arr2[i];
            arr2[i] = arr1[i] ^ arr2[i];
            arr1[i] = arr1[i] ^ arr2[i];
        }
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
    })
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
    })
    console.log(arr1filter);
    console.log(arr2filter);
}
swapArr([1, 2, 3], [5, 6, 7, 8, 9, 10, 11])
