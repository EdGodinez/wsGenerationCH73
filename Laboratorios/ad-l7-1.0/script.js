
const theButton = document.getElementById("theButton");
const alertContainer = document.getElementById("alertContainer");

theButton.addEventListener("click", function () {
  alertContainer.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      Alert, someone pushed the button

      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close">
      </button>
    </div>
  `;
});
