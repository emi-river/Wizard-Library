function cityDisplay() {
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((result) => {
      let citiesBox = document.getElementById("citiesBox");
      for (let c = 0; c < result.length; c++) {
        let display = document.createElement("div");
        display.setAttribute("id", "display");
        let title = document.createElement("h2");
        let populationElement = document.createElement("h3");
        let idNr = document.createElement("h3");

        let city = document.createTextNode(result[c].name);
        let population = document.createTextNode(result[c].population);
        let populationName = document.createTextNode("Population: ");
        let id = document.createTextNode(result[c].id);
        let idName = document.createTextNode("ID: ");

        title.appendChild(city);
        populationElement.appendChild(populationName);
        populationElement.appendChild(population);
        idNr.appendChild(idName);
        idNr.appendChild(id);

        display.appendChild(title);
        display.appendChild(populationElement);
        display.appendChild(idNr);

        citiesBox.appendChild(display);
      }
    });
}

let dSend = document.getElementById("deleteSend");
let addCity = document.getElementById("addCity");
let changeCity = document.getElementById("changeCity");

function addACity() {
  let addNameValue = document.getElementById("addName").value;
  let addPopValue = parseInt(document.getElementById("addPopulation").value);
  fetch("https://avancera.app/cities/", {
    body: JSON.stringify({ name: addNameValue, population: addPopValue }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  }).then(() => {
    cityDisplay();
  });
}

function changeACity() {
  let chosenId = document.getElementById("chosenId").value;
  let changeName = document.getElementById("changeName").value;
  let changePop = parseInt(document.getElementById("changePop").value);
  fetch("https://avancera.app/cities/" + chosenId, {
    body: JSON.stringify({
      id: chosenId,
      name: changeName,
      population: changePop,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
  }).then(() => {
    window.location.reload();
  });
}

function deleteCity(a) {
  let deleteValue = document.getElementById("delete").value;
  fetch("https://avancera.app/cities/" + deleteValue, {
    method: "DELETE",
  }).then(() => {
    window.location.reload();
  });
}

cityDisplay();
addCity.addEventListener("click", addACity);
changeCity.addEventListener("click", changeACity);
dSend.addEventListener("click", deleteCity);
