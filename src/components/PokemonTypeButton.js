import { useSelector, useDispatch } from "react-redux";
import '../App.css';
import { Link } from 'react-router-dom';


const PokemonTypeButton = () => {
    const pokemonTypes = useSelector(state => state.types)
    const filter = useDispatch()
    console.log(pokemonTypes)

    return (
        <div>
            <Link className="Link" to="/home"
                className="Block TypeButton Link" 
                onClick={() => filter({ type: 'FILTER_BY_TYPE', payload: "All"})}>
                
                    All
                </Link>
            {pokemonTypes.map(type => 
                <Link to="/home" key={type.name}
                    className="Block TypeButton Link"
                    onClick={() => filter({ type: 'FILTER_BY_TYPE', payload: type.name})}>
                        {type.name}
                </Link>)}
        </div>
    )
}

export default PokemonTypeButton;