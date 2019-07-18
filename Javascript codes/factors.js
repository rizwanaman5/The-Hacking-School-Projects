function factor(num) {
    for (var j = 2; j <= num / 2; j++) {
        if (num % j == 0) {
            console.log(j);
        }
    }
}
factor()