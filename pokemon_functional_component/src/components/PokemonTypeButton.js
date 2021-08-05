import React, {Component} from 'react';

const PokemonTypeButton = (props) => {

    const onButtonClickHandler = (e) => {
        props.onClickDisplayType(e.target.textContent);
    }

    return(
        <button onClick={(e) => onButtonClickHandler(e)}>
            {props.type}
        </button>
   )
}

// class PokemonTypeButton extends Component {
//     constructor (props) {
//         super (props);

//         this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
//     }

//     onButtonClickHandler(e){
//         this.props.onClickDisplayType(e.target.textContent);
//     }

//     render() {
//         return(
//             <button onClick={(e) => this.onButtonClickHandler(e)}>
//                 {this.props.type}
//             </button>
//         )
//     }
// }

export default PokemonTypeButton;