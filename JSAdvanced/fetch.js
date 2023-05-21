// function renderUser(){
//     fetch('https://reqres.in/api/users')
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(users){
//             console.log(users.data)
//         })
// }
function renderUser() {
    fetch('https://reqres.in/api/users')
        .then(async function (response) {
            const users = await response.json();
            const { data } = users
            let htmls = data.map(function (user) {
                return `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.first_name} ${user.last_name}</td>
                        <td><img src="${user.avatar}" alt=""></td>
                        <td>${user.email}</td>
                    </tr>
                `
            })
            document.querySelector("#tbUsers").innerHTML = htmls.join('')
        })
}

renderUser();

// document.querySelector('#keyword').oninput = function(e){
//     // console.log([e.target])
//     console.log(e.target.value)
// }
document.querySelector('#keyword').addEventListener('input', function(e){
    console.log(e.target.value)
})
