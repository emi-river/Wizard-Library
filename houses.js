fetch("https://wizard-world-api.herokuapp.com/Houses")
  .then((response) => response.json())
  .then((result) => {
    let houses = [0, 1, 2, 3];
    let fourHouses = document.getElementById("fourHouses"); // Element from HTML.
    for (let h = 0; h < houses.length; h++) {
      // Created elements.
      let displayHouses = document.createElement("div");
      displayHouses.setAttribute("id", "displayHouses");
      let title = document.createElement("h2");
      let founder = document.createElement("h3");
      let heads = document.createElement("h3");
      let houseColor = document.createElement("h3");
      let animal = document.createElement("h3");
      // -----------------------------------------
      // Created titles and fetched information.
      let name = document.createTextNode(result[houses[h]].name);
      let founderTitle = document.createTextNode("Founder: ");
      let founderText = document.createTextNode(result[houses[h]].founder);
      let headsTitle = document.createTextNode("Headmaster: ");
      let space = document.createTextNode(" ");
      let headsFirst = document.createTextNode(
        result[houses[h]].heads[0].firstName
      );
      let headsLast = document.createTextNode(
        result[houses[h]].heads[1].lastName
      );
      let houseColorTitle = document.createTextNode("House color: ");
      let houseColorText = document.createTextNode(
        result[houses[h]].houseColours
      );
      let animalTitle = document.createTextNode("Animal: ");
      let animalText = document.createTextNode(result[houses[h]].animal);
      // -----------------------------------
      // Created titles and fetched information inserted into HTML.
      title.appendChild(name);
      founder.appendChild(founderTitle);
      founder.appendChild(founderText);
      heads.appendChild(headsTitle);
      heads.appendChild(headsFirst);
      heads.appendChild(space);
      heads.appendChild(headsLast);
      houseColor.appendChild(houseColorTitle);
      houseColor.appendChild(houseColorText);
      animal.appendChild(animalTitle);
      animal.appendChild(animalText);

      displayHouses.appendChild(title);
      displayHouses.appendChild(founder);
      displayHouses.appendChild(heads);
      displayHouses.appendChild(houseColor);
      displayHouses.appendChild(animal);

      fourHouses.appendChild(displayHouses);
    }
  });
