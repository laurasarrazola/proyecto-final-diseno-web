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
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("floatingInput").value;
  const password = document.getElementById("floatingPassword").value;

  if (username === "laura" && password === "12345") {
    window.location.href = "/HTML/dashboard.html";
  } else {
    alert("Credenciales incorrectas");
  }
});
