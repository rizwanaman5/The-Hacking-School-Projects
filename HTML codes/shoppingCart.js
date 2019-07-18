document.getElementById('items').addEventListener('click', test)
const tablecart = document.getElementById('printArea')
tablecart.addEventListener('click', removefn)
function test(e) {
    // console.log(e.target.id)
    // console.log(e.target.classList.contains('btn'))
    // console.log(e.target.parentElement)

    if (e.target.classList.contains('btn') == true) {
        printName()
    } else { return false }

    function printName() {
        var display = document.getElementById('printArea')
        console.log(e.target.parentElement.querySelector('h5').textContent)
        var item = e.target.parentElement.querySelector('h5').textContent;
        var price = e.target.parentElement.querySelector('h2').textContent;
        var fixPrice = Number(price.substring(3, price.length))
        // console.log(fixPrice)


        let list = document.createElement('tr')

        list.innerHTML = `
    <td scope="row">
    ${item}
    </td>
    <td scope="row">
    ${price}
    </td>
    <td scope="row">
    <button class="removeBtn">X</button>
    </td>
    `;
        display.appendChild(list)
    }
}

let total = []
total.push(fixPrice);
console.log(total)

function removefn(e) {
    if (e.target.classList.contains('removeBtn')) {
        removetweet(e)
    }
}

function removetweet(e) {
    e.target.parentElement.parentElement.remove()
}



// var mycart = document.getElementById();
// console.log(mycart);
// mycart.addEventListener('click', addToCart)
// function addToCart(e) {
//     let display = document.getElementById('printArea')
//     console.log(e.target.parentElement.querySelector('h5').textContent)
//     let item = e.target.parentElement.querySelector('h5').textContent;
//     let list = document.createElement('li')
//     list.innerHTML = `${item}`
//     display.appendChild(list)
// }