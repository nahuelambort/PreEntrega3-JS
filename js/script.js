//CONSTANTES

const pokedex = {

  pokedex : [
    { numero: "1", nombre: "Bulbasaur", tipos: ["Planta", "Veneno"] },
    { numero: "2", nombre: "Ivysaur", tipos: ["Planta", "Veneno"] },
    { numero: "3", nombre: "Venusaur", tipos: ["Planta", "Veneno"] },
    { numero: "4", nombre: "Charmander", tipos: ["Fuego"] },
    { numero: "5", nombre: "Charmeleon", tipos: ["Fuego"] },
    { numero: "6", nombre: "Charizard", tipos: ["Fuego", "Volador"] },
    { numero: "7", nombre: "Squirtle", tipos: ["Agua"] },
    { numero: "8", nombre: "Wartortle", tipos: ["Agua"] },
    { numero: "9", nombre: "Blastoise", tipos: ["Agua"] },
    { numero: "10", nombre: "Caterpie", tipos: ["Bicho"] },
    { numero: "11", nombre: "Metapod", tipos: ["Bicho"] },
    { numero: "12", nombre: "Butterfree", tipos: ["Bicho", "Volador"] },
    { numero: "13", nombre: "Weedle", tipos: ["Bicho", "Veneno"] },
    { numero: "14", nombre: "Kakuna", tipos: ["Bicho", "Veneno"] },
    { numero: "15", nombre: "Beedrill", tipos: ["Bicho", "Veneno"] },
    { numero: "16", nombre: "Pidgey", tipos: ["Normal", "Volador"] },
    { numero: "17", nombre: "Pidgeotto", tipos: ["Normal", "Volador"] },
    { numero: "18", nombre: "Pidgeot", tipos: ["Normal", "Volador"] },
    { numero: "19", nombre: "Rattata", tipos: ["Normal"] },
    { numero: "20", nombre: "Raticate", tipos: ["Normal"] },
    { numero: "21", nombre: "Spearow", tipos: ["Normal", "Volador"] },
    { numero: "22", nombre: "Fearow", tipos: ["Normal", "Volador"] },
    { numero: "23", nombre: "Ekans", tipos: ["Veneno"] },
    { numero: "24", nombre: "Arbok", tipos: ["Veneno"] },
    { numero: "25", nombre: "Pikachu", tipos: ["Eléctrico"] },
    { numero: "26", nombre: "Raichu", tipos: ["Eléctrico"] },
    { numero: "27", nombre: "Sandshrew", tipos: ["Tierra"] },
    { numero: "28", nombre: "Sandslash", tipos: ["Tierra"] },
    { numero: "29", nombre: "Nidoran♀", tipos: ["Veneno"] },
    { numero: "30", nombre: "Nidorina", tipos: ["Veneno"] },
    { numero: "31", nombre: "Nidoqueen", tipos: ["Veneno", "Tierra"] },
    { numero: "32", nombre: "Nidoran♂", tipos: ["Veneno"] },
    { numero: "33", nombre: "Nidorino", tipos: ["Veneno"] },
    { numero: "34", nombre: "Nidoking", tipos: ["Veneno", "Tierra"] },
    { numero: "35", nombre: "Clefairy", tipos: ["Hada"] },
    { numero: "36", nombre: "Clefable", tipos: ["Hada"] },
    { numero: "37", nombre: "Vulpix", tipos: ["Fuego"] },
    { numero: "38", nombre: "Ninetales", tipos: ["Fuego"] },
    { numero: "39", nombre: "Jigglypuff", tipos: ["Normal", "Hada"] },
    { numero: "40", nombre: "Wigglytuff", tipos: ["Normal", "Hada"] },
    { numero: "41", nombre: "Zubat", tipos: ["Veneno", "Volador"] },
    { numero: "42", nombre: "Golbat", tipos: ["Veneno", "Volador"] },
    { numero: "43", nombre: "Oddish", tipos: ["Planta", "Veneno"] },
    { numero: "44", nombre: "Gloom", tipos: ["Planta", "Veneno"] },
    { numero: "45", nombre: "Vileplume", tipos: ["Planta", "Veneno"] },
    { numero: "46", nombre: "Paras", tipos: ["Bicho", "Planta"] },
    { numero: "47", nombre: "Parasect", tipos: ["Bicho", "Planta"] },
    { numero: "48", nombre: "Venonat", tipos: ["Bicho", "Veneno"] },
    { numero: "49", nombre: "Venomoth", tipos: ["Bicho", "Veneno"] },
    { numero: "50", nombre: "Diglett", tipos: ["Tierra"] },
    { numero: "51", nombre: "Dugtrio", tipos: ["Tierra"] },
    { numero: "52", nombre: "Meowth", tipos: ["Normal"] },
    { numero: "53", nombre: "Persian", tipos: ["Normal"] },
    { numero: "54", nombre: "Psyduck", tipos: ["Agua"] },
    { numero: "55", nombre: "Golduck", tipos: ["Agua"] },
    { numero: "56", nombre: "Mankey", tipos: ["Lucha"] },
    { numero: "57", nombre: "Primeape", tipos: ["Lucha"] },
    { numero: "58", nombre: "Growlithe", tipos: ["Fuego"] },
    { numero: "59", nombre: "Arcanine", tipos: ["Fuego"] },
    { numero: "60", nombre: "Poliwag", tipos: ["Agua"] },
    { numero: "61", nombre: "Poliwhirl", tipos: ["Agua"] },
    { numero: "62", nombre: "Poliwrath", tipos: ["Agua", "Lucha"] },
    { numero: "63", nombre: "Abra", tipos: ["Psíquico"] },
    { numero: "64", nombre: "Kadabra", tipos: ["Psíquico"] },
    { numero: "65", nombre: "Alakazam", tipos: ["Psíquico"] },
    { numero: "66", nombre: "Machop", tipos: ["Lucha"] },
    { numero: "67", nombre: "Machoke", tipos: ["Lucha"] },
    { numero: "68", nombre: "Machamp", tipos: ["Lucha"] },
    { numero: "69", nombre: "Bellsprout", tipos: ["Planta", "Veneno"] },
    { numero: "70", nombre: "Weepinbell", tipos: ["Planta", "Veneno"] },
    { numero: "71", nombre: "Victreebel", tipos: ["Planta", "Veneno"] },
    { numero: "72", nombre: "Tentacool", tipos: ["Agua", "Veneno"] },
    { numero: "73", nombre: "Tentacruel", tipos: ["Agua", "Veneno"] },
    { numero: "74", nombre: "Geodude", tipos: ["Roca", "Tierra"] },
    { numero: "75", nombre: "Graveler", tipos: ["Roca", "Tierra"] },
    { numero: "76", nombre: "Golem", tipos: ["Roca", "Tierra"] },
    { numero: "77", nombre: "Ponyta", tipos: ["Fuego"] },
    { numero: "78", nombre: "Rapidash", tipos: ["Fuego"] },
    { numero: "79", nombre: "Slowpoke", tipos: ["Agua", "Psíquico"] },
    { numero: "80", nombre: "Slowbro", tipos: ["Agua", "Psíquico"] },
    { numero: "81", nombre: "Magnemite", tipos: ["Eléctrico", "Acero"] },
    { numero: "82", nombre: "Magneton", tipos: ["Eléctrico", "Acero"] },
    { numero: "83", nombre: "Farfetch'd", tipos: ["Normal", "Volador"] },
    { numero: "84", nombre: "Doduo", tipos: ["Normal", "Volador"] },
    { numero: "85", nombre: "Dodrio", tipos: ["Normal", "Volador"] },
    { numero: "86", nombre: "Seel", tipos: ["Agua"] },
    { numero: "87", nombre: "Dewgong", tipos: ["Agua", "Hielo"] },
    { numero: "88", nombre: "Grimer", tipos: ["Veneno"] },
    { numero: "89", nombre: "Muk", tipos: ["Veneno"] },
    { numero: "90", nombre: "Shellder", tipos: ["Agua"] },
    { numero: "91", nombre: "Cloyster", tipos: ["Agua", "Hielo"] },
    { numero: "92", nombre: "Gastly", tipos: ["Fantasma", "Veneno"] },
    { numero: "93", nombre: "Haunter", tipos: ["Fantasma", "Veneno"] },
    { numero: "94", nombre: "Gengar", tipos: ["Fantasma", "Veneno"] },
    { numero: "95", nombre: "Onix", tipos: ["Roca", "Tierra"] },
    { numero: "96", nombre: "Drowzee", tipos: ["Psíquico"] },
    { numero: "97", nombre: "Hypno", tipos: ["Psíquico"] },
    { numero: "98", nombre: "Krabby", tipos: ["Agua"] },
    { numero: "99", nombre: "Kingler", tipos: ["Agua"] },
    { numero: "100", nombre: "Voltorb", tipos: ["Eléctrico"] },
    { numero: "101", nombre: "Electrode", tipos: ["Eléctrico"] },
    { numero: "102", nombre: "Exeggcute", tipos: ["Planta", "Psíquico"] },
    { numero: "103", nombre: "Exeggutor", tipos: ["Planta", "Psíquico"] },
    { numero: "104", nombre: "Cubone", tipos: ["Tierra"] },
    { numero: "105", nombre: "Marowak", tipos: ["Tierra"] },
    { numero: "106", nombre: "Hitmonlee", tipos: ["Lucha"] },
    { numero: "107", nombre: "Hitmonchan", tipos: ["Lucha"] },
    { numero: "108", nombre: "Lickitung", tipos: ["Normal"] },
    { numero: "109", nombre: "Koffing", tipos: ["Veneno"] },
    { numero: "110", nombre: "Weezing", tipos: ["Veneno"] },
    { numero: "111", nombre: "Rhyhorn", tipos: ["Tierra", "Roca"] },
    { numero: "112", nombre: "Rhydon", tipos: ["Tierra", "Roca"] },
    { numero: "113", nombre: "Chansey", tipos: ["Normal"] },
    { numero: "114", nombre: "Tangela", tipos: ["Planta"] },
    { numero: "115", nombre: "Kangaskhan", tipos: ["Normal"] },
    { numero: "116", nombre: "Horsea", tipos: ["Agua"] },
    { numero: "117", nombre: "Seadra", tipos: ["Agua"] },
    { numero: "118", nombre: "Goldeen", tipos: ["Agua"] },
    { numero: "119", nombre: "Seaking", tipos: ["Agua"] },
    { numero: "120", nombre: "Staryu", tipos: ["Agua"] },
    { numero: "121", nombre: "Starmie", tipos: ["Agua", "Psíquico"] },
    { numero: "122", nombre: "Mr. Mime", tipos: ["Psíquico", "Hada"] },
    { numero: "123", nombre: "Scyther", tipos: ["Bicho", "Volador"] },
    { numero: "124", nombre: "Jynx", tipos: ["Hielo", "Psíquico"] },
    { numero: "125", nombre: "Electabuzz", tipos: ["Eléctrico"] },
    { numero: "126", nombre: "Magmar", tipos: ["Fuego"] },
    { numero: "127", nombre: "Pinsir", tipos: ["Bicho"] },
    { numero: "128", nombre: "Tauros", tipos: ["Normal"] },
    { numero: "129", nombre: "Magikarp", tipos: ["Agua"] },
    { numero: "130", nombre: "Gyarados", tipos: ["Agua", "Volador"] },
    { numero: "131", nombre: "Lapras", tipos: ["Agua", "Hielo"] },
    { numero: "132", nombre: "Ditto", tipos: ["Normal"] },
    { numero: "133", nombre: "Eevee", tipos: ["Normal"] },
    { numero: "134", nombre: "Vaporeon", tipos: ["Agua"] },
    { numero: "135", nombre: "Jolteon", tipos: ["Eléctrico"] },
    { numero: "136", nombre: "Flareon", tipos: ["Fuego"] },
    { numero: "137", nombre: "Porygon", tipos: ["Normal"] },
    { numero: "138", nombre: "Omanyte", tipos: ["Roca", "Agua"] },
    { numero: "139", nombre: "Omastar", tipos: ["Roca", "Agua"] },
    { numero: "140", nombre: "Kabuto", tipos: ["Roca", "Agua"] },
    { numero: "141", nombre: "Kabutops", tipos: ["Roca", "Agua"] },
    { numero: "142", nombre: "Aerodactyl", tipos: ["Roca", "Volador"] },
    { numero: "143", nombre: "Snorlax", tipos: ["Normal"] },
    { numero: "144", nombre: "Articuno", tipos: ["Hielo", "Volador"] },
    { numero: "145", nombre: "Zapdos", tipos: ["Eléctrico", "Volador"] },
    { numero: "146", nombre: "Moltres", tipos: ["Fuego", "Volador"] },
    { numero: "147", nombre: "Dratini", tipos: ["Dragón"] },
    { numero: "148", nombre: "Dragonair", tipos: ["Dragón"] },
    { numero: "149", nombre: "Dragonite", tipos: ["Dragón", "Volador"] },
    { numero: "150", nombre: "Mewtwo", tipos: ["Psíquico"] },
    { numero: "151", nombre: "Mew", tipos: ["Psíquico"] }    
    ],
}

const cambioModo = document.getElementById("cambio_modo");
const body = document.body;
const inputNameID = document.getElementById("buscador")
const btnSearch = document.getElementById("search")
const randomButton = document.getElementById("poke_random");
const botonPokeTodos = document.getElementById("poke_todos");
const pokemonContent = document.getElementById("pokemonContent");
const pokeBoxContainer = document.getElementById("pokeBoxContent");
const listaAgregados = [];
const cajasOcupadas=[];

// CAMBIO DE MODO

const modoActual = localStorage.getItem("modo");
if (modoActual) {
  body.classList.add(modoActual);
}

cambioModo.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("modo", "light-mode");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("modo", "dark-mode");
  }
});

//BOTONES

randomButton.addEventListener("click",obtenerPokemonAleatorio);
btnSearch.addEventListener("click",encontrarPokemon);

// GUARDAR LA LISTA EN JSON

function guardarPokemons() {
  localStorage.setItem("pokemons", JSON.stringify(listaAgregados));
}

// LOCAL STORAGE

window.addEventListener("load", function() {
  const storedPokemons = localStorage.getItem("pokemons");
  if (storedPokemons) {
    const parsedPokemons = JSON.parse(storedPokemons);
    listaAgregados.push(...parsedPokemons);
    mostrarPokemonAgregados();
  }
});

// FUNCION BUSCAR RANDOM

function obtenerPokemonAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * pokedex.pokedex.length);
  const pokemon = pokedex.pokedex[indiceAleatorio];
  mostrarPokemon(pokemon);
}

// FUNCION BUSCAR POR NOMBRE Y NUMERO

function encontrarPokemon(){
  const pokemon = pokedex.pokedex.find((pokemon) => pokemon.numero === inputNameID.value || pokemon.nombre.toLowerCase() === inputNameID.value.toLowerCase());
  mostrarPokemon(pokemon);
}

// FUNCION PARA MOSTRAR TODOS LOS POKEMON

botonPokeTodos.addEventListener("click", function() {
  const pokedexContainer = document.getElementById("pokemonContent");

  pokedexContainer.innerHTML = '';

  pokedex.pokedex.forEach(function(pokemon) {
    mostrarPokemon(pokemon, pokedexContainer);
  });
  function mostrarPokemon(pokemon, container) {
    const tipos = pokemon.tipos.join(', ');
  
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon");
    pokemonElement.innerHTML = `

    <p><b>Número:</b> ${pokemon.numero}</p>
    <p><b>Nombre:</b> ${pokemon.nombre}</p>
    <p><b>Tipos:</b> ${tipos}</p>
    <button id="${pokemon.numero}">Ingresar</button>
	`;
    
  
    container.appendChild(pokemonElement);

    let agregador = activarBoton(pokemon.numero);
    agregador.addEventListener("click",function(){
      agregarLista(pokemon);
    })
  }
});

// ACTIVADOR DE BOTON

function activarBoton(id){
  const btnID = document.getElementById(id)
  return btnID
}

// FUNCIÓN PARA AGREGARLOS A LA LISTA

function agregarLista(pokemon) {
  if (listaAgregados.length < 6) {
    listaAgregados.push(pokemon);
    mostrarPokemonAgregados();
    guardarPokemons();
  } else {
    alert('Se ha alcanzado el límite máximo de Pokémon (6).');
  }
}

// FUNCION PARA MOSTRAR LOS POKEMON DE LA LISTA

function mostrarPokemonAgregados() {
  pokeBoxContainer.innerHTML = '';
  
  if (listaAgregados.length <= 6) {
    for (x in listaAgregados) {
      let poke = "pokemonCaja" + listaAgregados[x].numero.toString();

      const pokeBoxElement = document.createElement("div");
      pokeBoxElement.id = poke;
      pokeBoxElement.classList.add(poke);

      const content = document.createElement("div");
      content.innerHTML = `
      
	      <p><b>Número:</b> ${listaAgregados[x].numero}</p>
        <p><b>Nombre:</b> ${listaAgregados[x].nombre}</p>
        <button id=${listaAgregados[x].nombre} class="boton-eliminar eliminar-${poke}">Eliminar</button><br>`;

      pokeBoxElement.appendChild(content);
      pokeBoxContainer.appendChild(pokeBoxElement);
      cajasOcupadas.push(poke);
    }
  }

  const EliminarPokemons = document.querySelectorAll(".boton-eliminar");
  EliminarPokemons.forEach(btn => {
    btn.addEventListener('click', function() {
      const nombrePokemon = btn.id;
      eliminarPokemon(nombrePokemon);
      const divPokemon = btn.parentNode.parentNode;
      divPokemon.remove();
    });
  });
  guardarPokemons();
}

// FUNCIÓN PARA BOTON ELIMINAR

function eliminarPokemon(nombrePokemon) {
  const index = listaAgregados.findIndex(pokemon => pokemon.nombre === nombrePokemon);

  if (index !== -1) {
    listaAgregados.splice(index, 1);
  }
  guardarPokemons();
}


// FUNCION PARA MOSTRAR EL POKEMON BUSCADO

function mostrarPokemon(pokemon) {
  
  if (pokemon){
    const tipos = pokemon.tipos.join(', ');

    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon");
    pokemonElement.innerHTML = `
    
    <p><b>Número:</b> ${pokemon.numero}</p>
    <p><b>Nombre:</b> ${pokemon.nombre}</p>
    <p><b>Tipos:</b> ${tipos}</p>
    <button id="${pokemon.numero}">Ingresar</button>
    `;

    pokemonContent.innerHTML = '';

    pokemonContent.appendChild(pokemonElement);

    let agregador = activarBoton(pokemon.numero);
    agregador.addEventListener("click",function(){
      agregarLista(pokemon);
    })
  }

  else{
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon");
    pokemonElement.innerHTML = `

    <p>NO EXISTE</p>
    <p>POKÉMON</p>`;

    pokemonContent.innerHTML = '';
    pokemonContent.appendChild(pokemonElement);
  }
}