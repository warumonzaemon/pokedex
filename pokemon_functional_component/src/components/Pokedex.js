import React, {Component, useState} from 'react';
import PokemonTable from './PokemonTable';
import PokemonTypeButton from './PokemonTypeButton';
import anything from '../assets/pokedex.json';


const Pokedex = () => {
    const [pokemonDatabase, setPokemonDatabase] = useState(anything.pokemonData);
    const [selectedType, setSelectedType] = useState("All");

    const onClickDisplayType = (type) => {
        setSelectedType(type);
    }

    let pokemonTypes = ["All"];

    let filteredPokemonByType = 
        selectedType === "All"
        ? pokemonDatabase
        : pokemonDatabase.filter(
            (pokemon) => pokemon.type.indexOf(selectedType) >= 0
        );

    pokemonDatabase
        .map((pokemon) => pokemon.type)
        .forEach((types) => {
            types.forEach((type) => {
               if (pokemonTypes.indexOf(type) === -1) {
                   pokemonTypes.push(type);
               }
           });
       });
    pokemonTypes.sort();

    return(
        <>
        {pokemonTypes.map((type) => (
            <PokemonTypeButton
                type={type}
                key={type}
                onClickDisplayType={onClickDisplayType}
            />  
        ))}
        <PokemonTable pokemon={filteredPokemonByType} />
        </>      
    )
}

// class Pokedex extends Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//             pokemonDatabase : anything.pokemonData, 
//             selectedType : ""
//         };

//         this.onClickDisplayType = this.onClickDisplayType.bind(this);
//     }

//     onClickDisplayType(type) {
//         this.setState({selectedType: type });
//     }

//     render(){
//         let pokemonTypes = [];
//         let filteredPokemonByType = 
//             this.state.selectedType === ""
//             ? this.state.pokemonDatabase
//             : this.state.pokemonDatabase.filter(
//                 (pokemon) => pokemon.type.indexOf(this.state.selectedType) >= 0
//             );
        
//         console.log(this.state.pokemonDatabase);

//         this.state.pokemonDatabase
//             .map((pokemon) => pokemon.type)
//             .forEach((types) => {
//                 types.forEach((type) => {
//                    if (pokemonTypes.indexOf(type) === -1) {
//                        pokemonTypes.push(type);
//                    }
//                });
//            });
        
//         pokemonTypes.sort();

//         return(
//             <>
//             {pokemonTypes.map((type) => (
//                 <PokemonTypeButton
//                     type={type}
//                     key={type}
//                     onClickDisplayType={this.onClickDisplayType}
//                 />  
//             ))}
//             <PokemonTable pokemon={filteredPokemonByType} />
//             </>

            
//         )
//     }
// }

export default Pokedex;