// function isValidName(input) {
    // console.log(typeof(input))
    // if ( typeof input !== "string") {return false}
    // else if (input == null) {return false}
    // else if ( input.trim <= 3) {return false}
    // else {return true}
//  } 
//  console.log(isValidName("Cat"))

function isValidName(input) {
    if ( typeof input == "string" && input.trim().length >= 3 ) {return true}
    return false
}


//tests
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
