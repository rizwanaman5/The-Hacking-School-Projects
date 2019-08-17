document.getElementById('button').addEventListener('click', load)


function load(e) {
    e.preventDefault();

    if (e.target.classList.contains('btn') == true) {
        printNames()
    } else { return false }

    function printNames() {

        const xhr = new XMLHttpRequest();

        let Country = document.getElementById('drop1').value
        let Gender = document.getElementById('drop2').value

        let country = Country.toLowerCase();
        let gender = Gender.toLowerCase();

        xhr.open('GET', `https://uinames.com/api/?gender=${gender}&region=${country}&amount=5`, true);

        console.log(country);
        console.log(gender);

        //Execute the fun
        xhr.onload = function () {
            if (this.status === 200) {

                const Name = JSON.parse(this.responseText);

                console.log('line 33', Name)

                let output = '';
                Name.forEach(function (Name) {
                    output += `
                        <div class="Cards">
                        <div class="card" style="width: 23rem;">
                        <div class="card-body">        
                        <ul>
                        <li>Name: ${Name.name} ${Name.surname}</li>
                        <li>Gender: ${Name.gender} </li>
                        <li>Region: ${Name.region} </li>
                        <li>Number: ${Math.floor((Math.random())*1000)} ${Math.floor((Math.random())*10000)}</li>
                        <li>Email: ${(Name.name).toLowerCase()}_${Math.floor((Math.random())*100)}${'@example.com'}</li>
                        <li>Password: ${(Name.surname).toLowerCase()}_${Math.floor((Math.random())*100)}</li>
                        </ul>
                        </div>
                        </div>
                        </div>        
                        `;
                });
                document.getElementById('Names').innerHTML = output;
            }
        };

        xhr.send();
    }
}
