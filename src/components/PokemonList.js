import { useSelector, useDispatch } from "react-redux";
import { Route, Link } from 'react-router-dom';
import '../App.css';
import PokemonDescription from "./PokemonDescription";

const PokemonList = () => {
    const pokemonList = useSelector(state => state.filteredPokedex)
    const select = useDispatch();

    return (
        <div className="PokemonList"> 
            {pokemonList.map(data => 
                    <Link className="Link ThumbnailButton Box" key={data.ntnlnum} to="/pokemonData"
                        onClick={() => select({type: 'CHECK_POKEMON_DATA', payload: data.ntnlnum})}>
                            <div>
                                <h3 className="PokemonNumber">{data.ntnlnum}</h3>
                                <div className="Image">
                                    <img src={data.img} alt={data.name}/>
                                </div>
                                
                                <h3 className="PokemonName">{data.name}</h3>
                            </div>
                                
                    </Link>)}
            
                    <Route path="/pokemonData" component={PokemonDescription} /> 
        </div>
    )
}

export default PokemonList;