//Bloqueo de teclas 

const keysLocked = ["a", "A", "b", "B"];


document.querySelectorAll(

    ".campo__field").forEach(field => {

        field.addEventListener("keydown", function (e) {

            if (keysLocked.includes(e.key)) {
                e.preventDefault();
                console.log(`Tecla ${e.key} bloqueada`)
            };

        });
    });


