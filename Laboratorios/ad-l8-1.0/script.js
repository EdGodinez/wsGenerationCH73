
const contactForm = document.getElementById("contactForm");
const alertContainer = document.getElementById("alertContainer");

if (contactForm && alertContainer) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Crear alerta de Bootstrap
    alertContainer.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show"
           role="alert">
        <strong>Message sent!</strong>
        Tu mensaje se registró en este formulario de demostración.

        <button type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Cerrar">
        </button>
      </div>
    `;

    // Limpiar los campos
    contactForm.reset();
  });
}
