window.onload = () => {
    document.querySelector('button').onclick = getData;
}


// ASYNC AWAIT concept
async function getData() {
    const API_URI = 'https://jsonplaceholder.typicode.com/users'
    const response =  await fetch(API_URI);
    const data = await response.json();
   
    console.log(data);

    let out = '<h2>Data of Users</h2>'

    data.forEach(user => {
       
       out += `
        <ul class="list-group"> 
            <li class="list-group-item text-primary">${user.name}</li>
            <li class="list-group-item text-secondary">${user.email}</li>
            <li class="list-group-item text-info">${user.website}</li>
        </ul>
       `
    })
    
    document.querySelector('#result').innerHTML = out;

     
}


// Using .this function
// function getData() {
//     const API_URI = 'https://jsonplaceholder.typicode.com/users' ;
//     // console.log(fetch(API_URI))
//     //  for asyn request, it always returns a promise
//     fetch(API_URI)
//     .then(res => res.json())
//     .then(data=> {
//         console.log(data);
//     });
// }