fetch("https://wizard-world-api.herokuapp.com/Spells/")
  .then((response) => response.json())
  .then((result) => {
    let spells = [301, 199, 173, 249, 239, 19, 93, 7, 71];
    let nineSpells = document.getElementById("nineSpells"); // Element from html.
    for (let s = 0; s < spells.length; s++) {
      // -----------------------------------
      // Created elements.
      let displaySpells = document.createElement("div");
      displaySpells.setAttribute("id", "displaySpells");
      let spell = document.createElement("h2");
      let incantation = document.createElement("h3");
      let effect = document.createElement("h3");
      let type = document.createElement("h3");
      // ------------------------------------
      // Created titles and fetched information.
      let spellName = document.createTextNode(result[spells[s]].name);
      let incanTitle = document.createTextNode("Incantation: ");
      let spellIncan = document.createTextNode(result[spells[s]].incantation);
      let effectTitle = document.createTextNode("Effect: ");
      let spellEffect = document.createTextNode(result[spells[s]].effect);
      let typeTitle = document.createTextNode("Type: ");
      let spellType = document.createTextNode(result[spells[s]].type);

      // ------------------------------------
      // Created titles and fetched information inserted into HTML.
      spell.appendChild(spellName);
      incantation.appendChild(incanTitle);
      incantation.appendChild(spellIncan);
      effect.appendChild(effectTitle);
      effect.appendChild(spellEffect);
      type.appendChild(typeTitle);
      type.appendChild(spellType);

      displaySpells.appendChild(spell);
      displaySpells.appendChild(incantation);
      displaySpells.appendChild(effect);
      displaySpells.appendChild(type);

      nineSpells.appendChild(displaySpells);
    }
    let chartDiv = document.getElementById("chart");
    let spellChart = document.createElement("canvas");
    chartDiv.appendChild(spellChart);
    let allTypes = {};
    for (let t = 0; t < result.length; t++) {
      let spellIndex = result[t];
      let typeIndex = spellIndex.type;
      if (allTypes[typeIndex] === undefined) {
        allTypes[typeIndex] = 0;
      }
      if (typeIndex.includes(typeIndex)) {
        allTypes[typeIndex] = allTypes[typeIndex] + 1;
      }
    }
    let chart = new Chart(spellChart, {
      type: "doughnut",
      data: {
        labels: Object.keys(allTypes),
        datasets: [
          {
            data: Object.values(allTypes),
            backgroundColor: [
              "#94C6ED",
              "#E698D0",
              "#F4E4C6",
              "#EF4B4A",
              "#A2E4B7",
              "#240C3E",
              "#59151C",
              "#AE4E08",
              "#7C1765",
              "#D5CB10",
              "#C91404",
              "#02E404",
              "#FF0066",
              "#9701FF",
              "#00FFF6",
              "#FF7800",
              "#2B29F7",
              "#F729EE",
            ],
            borderColor: [
              "#94C6ED",
              "#E698D0",
              "#F4E4C6",
              "#EF4B4A",
              "#A2E4B7",
              "#240C3E",
              "#59151C",
              "#AE4E08",
              "#7C1765",
              "#D5CB10",
              "#C91404",
              "#02E404",
              "#FF0066",
              "#9701FF",
              "#00FFF6",
              "#FF7800",
              "#2B29F7",
              "#F729EE",
            ],
          },
        ],
      },
    });
  });
