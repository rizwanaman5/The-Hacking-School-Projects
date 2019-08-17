
var intervalID = window.setInterval(time, 1000);

function time() {
    var a = new Date()

    let x = a.getHours();
    let y = a.getMinutes();
    let z = a.getSeconds();
    
    const b =`${(x > 12 ? x-12 : x)} : ${y} : ${z}  ${(x >= 12 ? 'PM' : 'AM')}`
    
    document.getElementById('time').innerHTML = b    
}

