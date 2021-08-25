import './App.css';
import { Route, Link } from 'react-router-dom';

import PokemonList from './components/PokemonList';
import PokemonTypeButton from './components/PokemonTypeButton';
import PokemonDescription from './components/PokemonDescription';

const App = () => {
  return (
    <div>
      <header className="Box Title">
      <Link className="Link" to="/home"><h1>POKEDEX</h1></Link>
      </header>

      <div  className="MainBody" >
        <div className="TypeSelection Box">
          <PokemonTypeButton />
        </div>
        <div className="SubBody">
          <Route path="/home" component={PokemonList} />
          <Route path="/pokemonData" component={PokemonDescription} />
        </div>
      </div>
    </div>
  );
}

export default App;
