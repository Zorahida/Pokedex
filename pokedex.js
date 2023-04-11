const pokedex = document.querySelector(".container")

const getAllPokemons = async () => {
    let pokemons = [];
     for (let i = 1; i <= 150; i++) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
    let res = await response.json();
    pokemons.push(res);
    //let allCharacters = res.results;
    }
    return pokemons;
};

const mapPokemons = (pokemons) => {
    //console.log(pokemon);
   return pokemons.map((pokemon) => ({
        name: pokemon.name,
        //No se si hay algún Pokemon femenino, solo me ha dado tiempo de ver los primeros y parece que no, pero por si hubiera, intento que aparezcan
        img: pokemon.sprites.front_female != null
               ? pokemon.sprites.front_female
                 : pokemon.sprites.front_default,
        id: pokemon.id,
    }))
    };
        //height: pokemon.height,


const draw = (pokemonList) => {
    let ul = document.getElementById("pokedex");
    let pokeList = "";
    let cont = 0;

    pokemonList.forEach((pokemon) => {
    cont = ++cont;
    pokeList += `<div class="card">
    <h2>${pokemon.name}</h2>
    <img src= "${pokemon.img}" alt = "${pokemon.name}"/>
    <p>${pokemon.id}</p>
    </div>`;
});
ul.innerHTML = pokeList;
}

//const takeInput = (pokemons) => {
//    const input$$ = document.querySelector("input");
//    input$$.addEventListener("input", () => 
//    searchPokemon(pokemons, input$$.name)
//    );
//};

const searchPokemon = (arrayPokemons, filtro) =>
{
    let filteredPokemons = arrayPokemons.filter((pokemon) =>
    pokemon.name.includes(filtro));

draw(filteredPokemons);
};


const init = async () => {
  const pokemons = await getAllPokemons();
    
    const mapedPokemons = mapPokemons (pokemons);
    
    draw(mapedPokemons);

    //takeInput(mapedPokemons);
};
init();

//Cosas que de momento no voy a usar;
//    <p>${pokemon.height}</p>
//

