// Mean of an array
function mean(array) {
    let count = 0
    for (let i = 0; i < array.length; i++)
    count = count + array[i]
    console.log(count/array.length)
} 
mean([1, 8, 4, 5])
