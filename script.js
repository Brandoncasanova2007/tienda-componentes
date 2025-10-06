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

// Simulación de base de datos
const usuarios = [
  { usuario: "brandon", password: "1234", saldo: 1000 },
  { usuario: "alex", password: "abcd", saldo: 1000 },
  { usuario: "carla", password: "5678", saldo: 1000 },
  { usuario: "juan", password: "0000", saldo: 1000 },
];

// Guardar usuario logueado en localStorage
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("password").value.trim();
    const encontrado = usuarios.find(u => u.usuario === user && u.password === pass);

    const mensaje = document.getElementById("mensaje");

    if (encontrado) {
      localStorage.setItem("usuarioActivo", JSON.stringify(encontrado));
      mensaje.textContent = "Inicio de sesión exitoso ✅";
      setTimeout(() => window.location.href = "index.html", 1000);
    } else {
      mensaje.textContent = "Usuario o contraseña incorrectos ❌";
    }
  });
}

// Mostrar saldo en la página principal
if (document.getElementById("saldoUsuario")) {
  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
  if (usuarioActivo) {
    document.getElementById("saldoUsuario").textContent = `Saldo: Bs ${usuarioActivo.saldo}`;
    document.getElementById("loginLink").textContent = usuarioActivo.usuario;
  }
}
