//Eventos de los input

const { read } = require("xlsx");


//leer lo que ingresa el usuario
const userName = document.querySelector(".user-name");
//leer lo que ingresa el usuario
const userEmail = document.querySelector(".user-email");
//leer lo que ingresa el usuario
const userPhone = document.querySelector(".user-phone");
//leer lo que ingresa el usuario
const UserMessage = document.querySelector(".user-message");



// userName.addEventListener("input", function (e) {
//     //leer lo que el usuario escribe
//     console.log(e.target.value);

// });
// userEmail.addEventListener("input", function (e) {
//     //leer lo que el usuario escribe
//     console.log(e.target.value);

// });
// userPhone.addEventListener("input", function (e) {
//     //leer lo que el usuario escribe
//     console.log(e.target.value);

// });
// UserMessage.addEventListener("input", function (e) {
//     //leer lo que el usuario escribe
//     console.log(e.target.value);

// });


//vamos a hacer refactorizacion 


userName.addEventListener("input", readText);
userPhone.addEventListener("input", readText);
userEmail.addEventListener("input", readText);
UserMessage.addEventListener("input", readText);

function readText (e) {
    console.log(e.target.value);
}



