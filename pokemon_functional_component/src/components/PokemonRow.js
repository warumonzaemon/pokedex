import React, {Component} from 'react';

const PokemonRow = (props) => {
    return(
        <>
           <tr>
               <td>{props.name}</td> 
               <td>{props.type.toString()}</td>
           </tr>
        </>
    )
}

// class PokemonRow extends Component {

//     render(){
//         return(           
//             <>

//                 <tr>
//                     <td>{this.props.name}</td> 
//                     <td>{this.props.type.toString()}</td>
//                 </tr>
                
//             </>            
//         )
//     }
// }

export default PokemonRow;