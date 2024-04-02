function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) == index);
  }
  
  async function getPokeType() {
    try {
      const response = await fetch("./pokemon.json");
      const data = await response.json();
      const types = removeDuplicates(data.map((pokemon) => pokemon.type).flat());
      var mySelect = document.getElementById("type_select");
      for (var i = 0; i < types.length; i++) {
        var type = types[i];
        var ele = document.createElement("option");
        ele.textContent = type;
        ele.value = type;
        mySelect.appendChild(ele);
      }
      return types;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  getPokeType();
  
  async function getAllPokemons(filter = "") {
    try {
      const response = await fetch("./pokemon.json");
      const data = await response.json();
  
      const container =
        document.querySelector(".pokemon-container") ||
        document.body.appendChild(document.createElement("div"));
      container.classList.add("pokemon-container");
      container.innerHTML = "";
  
      data.forEach((item) => {
        if (item.name.french.toLowerCase().includes(filter.toLowerCase())) {
          const pokemonDiv = document.createElement("div");
          pokemonDiv.classList.add("pokemon");
          pokemonDiv.textContent = JSON.stringify(item.name.french);
          container.appendChild(pokemonDiv);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const inputNameElement = document.getElementById("name_input");
  const inputIdElement = document.getElementById("id_input");
  inputNameElement.addEventListener("keydown", () => {
    getAllPokemons(inputNameElement.value);
  });
  getAllPokemons();