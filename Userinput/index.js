let username;

radius = window.prompt(`Enter the name :`)

document.getElementById(`sub`).onclick = function(){
    username =document.getElementById(`inp`).value;
    console.log(`My name is ${username}`);
    document.getElementById(`myH1`).textContent=`hello ${username}`;
}
