// import App from "../App";

import pokemonList from "../assets/pokemon.json"

const initialState = { 
    pokedex: pokemonList.pokemons, 
    types: pokemonList.types, 
    filteredPokedex: pokemonList.pokemons, 
    selectedPokemon: {
        "name": "",
        "ntnlnum": "",
        "img": "",
        "types": [""],
        "description": ""
    } };

const reducer = (state = initialState, action) => {

    switch(action.type){
        // Define how we will interact with the state
        case 'FILTER_BY_TYPE':
            console.log(action.payload);
            let selectedType = action.payload;
            let filteredPokemonByType = 
                selectedType === "All"
                ? state.pokedex
                : state.pokedex.filter(
                (pokemon) => pokemon.types.indexOf(selectedType) >= 0);
                console.log(filteredPokemonByType);
            
            return {...state, filteredPokedex: filteredPokemonByType};
        case 'CHECK_POKEMON_DATA':
            console.log(action.payload);
            let selected = state.pokedex.find(pokemon => pokemon.ntnlnum === action.payload)
            console.log(selected)
            return {...state, selectedPokemon: selected};
        default:
            return state;
    }
}

export default reducer;