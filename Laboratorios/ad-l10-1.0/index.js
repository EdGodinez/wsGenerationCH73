const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

function fetchColorsList() {
  fetch("https://reqres.in/api/unknown")
    .then(response => response.json())
    .then(data => {

      //Guardar los colores en el local Storage
      localStorage.setItem("colors", JSON.stringify(data.data));

      itemsContainer.innerHTML = "";

      data.data.forEach(color => {
        addItem(color);
      });
    });
}

function loadColorsFromStorage() {
  const colors = JSON.parse(localStorage.getItem("colors"));

  if (colors) {
    itemsContainer.innerHTML = "";

    colors.forEach(color => {
      addItem(color);
    });
  }
}

//fetchColorsList()
loadColorsFromStorage()

const btnBorrar = document.querySelector("#btn-borrar");

btnBorrar.addEventListener("click", function() {
  itemsContainer.innerHTML = "";
});

const btnCargar = document.querySelector("#btn-cargar");

btnCargar.addEventListener("click", function() {
  itemsContainer.innerHTML = "";
  fetchColorsList();
});