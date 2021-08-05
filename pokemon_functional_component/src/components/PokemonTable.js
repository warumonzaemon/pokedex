import React, {Component} from 'react';
import PokemonRow from './PokemonRow';

const PokemonTable =(props) => {
        return(                       
            <table>
                <thead>
                <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>                   
                <tbody>
                    {props.pokemon.map ((pokemon) => (
                    <PokemonRow key={pokemon.id} name={pokemon.name.english} type={pokemon.type}/>
                    ))}
                </tbody>                   
            </table>            
        )
}

// class PokemonTable extends Component {
//     render(){
//         return(           
            
//             <table>
//                 <thead>
//                 <tr>
//                         <th>Name</th>
//                         <th>Type</th>
//                     </tr>
//                 </thead>                   
//                 <tbody>
//                     {this.props.pokemon.map ((pokemon) => (
//                     <PokemonRow key={pokemon.id} name={pokemon.name.english} type={pokemon.type}/>
//                     ))}
//                 </tbody>                   
//             </table>            
//         )
//     }
// }

export default PokemonTable;