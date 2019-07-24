// maximum number in an array
function max(array) {
    let count = array[0]
    for (i = 0; i < array.length; i++){
        if (count < array[i]) {
            count = array[i]
         }
    }
    console.log(count)
} 

max([-1, 5, 0, undefined])