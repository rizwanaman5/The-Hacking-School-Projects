document.getElementById('button').addEventListener('click', load);

function load(e) {
    e.preventDefault();

    if (e.target.classList.contains('btn') == true) {
        printNames()
    } else { return false }

    function printNames() {
        const xhr = new XMLHttpRequest();

        let user = document.getElementById('inputString').value

        xhr.open('GET', `https://api.github.com/users/${user}`, true);

        console.log(user)

        xhr.onload = function () {
            if (this.status === 200) {
                const Names = JSON.parse(this.responseText);
                console.log(Names.login)

                const output = `
               <ul>
               <img src="${Names.avatar_url}" class="profile_photo">

               
               <li>username: ${Names.login} </li>
               <li>ID: ${Names.id} </li>
               <li>Company: ${Names.company} </li>
               <li>Bio: ${Names.bio} </li>
               <li>Public Repos: ${Names.public_repos} </li>
               <li>Followers: ${Names.followers} </li>
               <li>Following: ${Names.following} </li>
               <li>User since: ${Names.created_at} </li>
               </ul>
            `;
                document.getElementById('names2').innerHTML = output;
            }
        };
        xhr.send();
    }

}
