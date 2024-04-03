
  const formLogin = document.querySelector('#login');
  const loginUsuario = document.querySelector('#usuario');
  const loginPassword = document.querySelector('#password');
  const usuariosArray = JSON.parse(localStorage.getItem("usuarios")) || [];
  const crearCuenta =document.querySelector('#registrar')
  let registroClick = false;
  //login
  formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const usuarioIngresado = loginUsuario.value;
      const passwordIngresado = loginPassword.value;
      const usuarioEncontrado = usuariosArray.find(usuario => usuario.nombreCuenta === usuarioIngresado);
      if (usuarioEncontrado && usuarioEncontrado.password === passwordIngresado) {
        Swal.fire("Bienvenido"+ usuarioIngresado);
          window.location.href= "/html/inicio.html"
      } else {
        if (!registroClick) {
            Swal.fire({
                title: "Usuario inválido",
                text: "Por favor, inténtelo nuevamente",
                icon: "error"
              });
        } else {
            registroClick = false; 
        }
    }
});
  crearCuenta.addEventListener('click', () => {
    registroClick = true; 
    window.location.href = "/html/registro.html";
});

