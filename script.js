document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletterForm");
  const alertDiv = document.getElementById("successAlert");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Mostrar alerta de éxito
      alertDiv.classList.remove("d-none");
      // Limpiar formulario
      form.reset();
      // Scroll suave hacia la alerta
      alertDiv.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});
