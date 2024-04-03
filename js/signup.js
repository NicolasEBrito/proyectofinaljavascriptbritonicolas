const formRegistro = document.getElementById('formRegistro');
const email = document.querySelector('#email');
const nombreCuenta = document.querySelector('#usuario');
const password = document.querySelector('#password');
const crearUser = document.querySelector('#crearUser')
//registro de usuarios
class Usuario {
    constructor(email, usuario, password) {
        this.email = email;
        this.nombreCuenta = usuario; 
        this.password = password;
    }
}
const usuariosArray = JSON.parse(localStorage.getItem("usuarios")) || [];


function guardarUsuarios(nuevoUsuario) {
    usuariosArray.push(nuevoUsuario);
}
//guardar usuarios en ls
function guardarEnLS(arr) {
    localStorage.setItem("usuarios", JSON.stringify(arr));
}
//comprobaciones de registro
formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const validarMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const nuevoUsuario = new Usuario(email.value, nombreCuenta.value, password.value);
    if (!validarMail.test(email.value)) {
        Swal.fire({
            text: "Dirección de email inválida",
            icon: "error"
          });
        return;
    }
    if (password.value.length < 8) {
        Swal.fire({
            text: "Contraseña demasiado corta",
            icon: "error"
          });
        return;
    }
    if (typeof nombreCuenta.value !== "string") {
        Swal.fire({
            text: "Usuario inválido",
            icon: "error"
          });
        return; 
    }
    guardarUsuarios(nuevoUsuario);
    guardarEnLS(usuariosArray);
    window.location.href = "../html/index.html";
});