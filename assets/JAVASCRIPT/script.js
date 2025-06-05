function abrirModal(id) {
  document.getElementById(id).style.display = "block";
  /*.style Accede a los estilos CSS en línea del elemento.*/
  /* .display Modifica la propiedad display del elemento convirtiéndolo a bloque*/
}

function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
  /*El valor none oculta el modal*/
}

/*Formulario ingreso  */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;

    if (username === "laura" && password === "12345") {
      window.location.href = "/HTML/dashboard.html";
    } else {
      alert("Credenciales incorrectas");
    }
  });
}

// Cierra el menú hamburguesa al hacer clic fuera de él (Bootstrap 5)
document.addEventListener('click', function (event) {
  const navbarCollapse = document.getElementById('navbarNav');
  const menuToggle = document.querySelector('.header__menu-toggle');
  if (!navbarCollapse || !menuToggle || window.innerWidth >= 992) return;
  if (
    navbarCollapse.classList.contains('show') &&
    !navbarCollapse.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      collapse.hide();
    } else {
      navbarCollapse.classList.remove('show');
    }
  }
});

