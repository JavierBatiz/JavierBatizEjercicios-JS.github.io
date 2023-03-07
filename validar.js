function validar(){
        // Obtener el formulario y los campos

        const formulario = document.getElementById("formulario");
        const nombreInput = document.getElementById("nombre");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        // Definir las expresiones regulares para cada campo
        const nombreRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        // Validar el formulario al enviarlo
        formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // evitar el envío del formulario por defecto

        // Obtener los valores de los campos
        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validar el nombre
        if (!nombreRegex.test(nombre)) {
        alert("El nombre no es válido.");
        nombreInput.focus();
        return;
        }

        // Validar el correo electrónico
        if (!emailRegex.test(email)) {
        alert("El correo electrónico no es válido.");
        emailInput.focus();
        return;
        }

        // Validar la contraseña
        if (!passwordRegex.test(password)) {
        alert("La contraseña no es válida.");
        passwordInput.focus();
        return;
        }

        // El formulario es válido, enviarlo
        formulario.submit();
        });
        }

function problema1(){

        const capitalInput = document.getElementById("capital");

        const capitalRegex = /^[0-9]+$/;

        const formulario = document.getElementById("formulario");
        formulario.addEventListener("submit", (e) => {

                const capital = capitalInput.value.trim();

                if (!capitalRegex.test(capital)) {
                        alert("El valor introducido no es valido");
                        capitalInput.focus();
                        return;
                        }

                formulario.submit();

                alert("La ganancia sera de: $" + (capital * 0.02) );
        }
)}
