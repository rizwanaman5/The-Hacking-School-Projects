// prompt("Convert to Miles")

function getkm(){
    var input = prompt("Please enter a number");
    alert((input/1.60934).toFixed(2) + " miles")
    return getkm()
}

getkm()

document.getElementById("h1").style.color = "red";