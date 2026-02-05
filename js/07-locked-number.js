//Bloqueo de numeros

//const keysLocked = ["a", "A", "b", "B"];


document.querySelector(".user-name").addEventListener("keydown", function(event){

if(event.key >=0 && event.key <=9) {

    event.preventDefault();
    console.log("Numeros bloqueados");

}

});


