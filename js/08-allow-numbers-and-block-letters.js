//Bloqueo de numeros

//const keysLocked = ["a", "A", "b", "B"];


document.querySelector(".user-phone").addEventListener("keydown", function (e) {

    if (e.key === "Backspace" ||
        e.key === "Tab" ||
        e.key === "Enter" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"

        ) {
        return;

    };

    //Bloqeuar cualquier tecla que no sea numero 

    if(e.key < "0" || e.key >"9") {
        e.preventDefault();
        console.log("Solo se permiten números");

    }

});




