function upDown(x) {
    if ( x < 0 || Object.is(x,-0)) {
        console.log("Down")
    } else {
        console.log("Up")
    }
}
upDown(-0)

