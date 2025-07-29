// script.js
document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // Mostrar un mensaje de confirmación
    const mensajeRegistro = document.getElementById('mensajeRegistro');
    mensajeRegistro.innerHTML = `<p>Gracias, ${nombre}. Te has registrado con el email: ${email}</p>`;

    // Limpiar el formulario
    this.reset();
});
