// Formulario de registro
document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    // Obtén los valores de los campos
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const username = document.getElementById('username').value;
    const correo = document.getElementById('correo').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const domicilio = document.getElementById('domicilio').value;
    const contrasena1 = document.getElementById('contrasena1').value;
    const contrasena2 = document.getElementById('contrasena2').value;

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexContrasena = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;


    if (!nombres || !apellidos || !username || !correo || !fechaNacimiento || !contrasena1 || !contrasena2) {
        alert('Todos los campos son obligatorios, excepto la dirección de despacho.');
        return;
    }

    // Validación del correo electrónico
    if (!regexCorreo.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validar contraseñas iguales
    if (contrasena1 !== contrasena2) {
        alert('Las contraseñas deben coincidir.');
        return;
    }

    // Validar la contraseña (al menos una mayúscula, un número y longitud entre 6-18 caracteres)
    if (!regexContrasena.test(contrasena1)) {
        alert('La contraseña debe tener al menos una letra mayúscula, un número y una longitud de entre 6 y 18 caracteres.');
        return;
    }

    // Validar edad mínima de 13 años
    const fechaActual = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    const diferenciaMeses = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
    
    if (edad < 13 || (edad === 13 && diferenciaMeses < 0)) {
        alert('Debes tener al menos 13 años para registrarte.');
        return;
    }

});

// Botón para limpiar formulario
document.getElementById('clean-btn').addEventListener('click', function() {
    // Limpiar todo el formulario
    document.querySelector('.formulario-registro').reset();
});