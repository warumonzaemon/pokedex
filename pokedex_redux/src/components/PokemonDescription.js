
import { useSelector } from "react-redux";
import { Route, Link } from 'react-router-dom';
import PokemonList from "./PokemonList";


const PokemonDescription = () => {
    const pokemon = useSelector(state => state.selectedPokemon)
    console.log(pokemon.name)

    return(
        <div className="PokemonDescContainer Box">
            <button className="">
                <Link className="Link" to="/home">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQwLjVweCIgaGVpZ2h0PSI0MC41cHgiIHZpZXdCb3g9IjAgMCA0MC41IDQwLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwLjUgNDAuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQwLjUsMjAuMjVjMCw5LjM3NC03LjYyNSwxNy0xNywxN2MtMS42NTYsMC0zLTEuMzQzLTMtM3MxLjM0NC0zLDMtM2M2LjA2NCwwLDExLTQuOTM2LDExLTExYzAtNi4wNjUtNC45MzYtMTEtMTEtMTENCgkJYy01Ljc1NiwwLTEwLjQ4Niw0LjQ0Ny0xMC45NTMsMTAuMDg2bDEuODMyLTEuODMyYzEuMTcxLTEuMTcyLDMuMDcxLTEuMTcyLDQuMjQyLDBjMS4xNzIsMS4xNzEsMS4xNzIsMy4wNzEsMCw0LjI0MmwtNi43NSw2Ljc1DQoJCWMtMC41NjMsMC41NjItMS4zMjYsMC44NzktMi4xMjEsMC44NzljLTAuNzk2LDAtMS41NTktMC4zMTYtMi4xMjEtMC44NzlsLTYuNzUtNi43NWMtMS4xNzItMS4xNzItMS4xNzItMy4wNzEsMC00LjI0Mg0KCQljMS4xNzItMS4xNzIsMy4wNzEtMS4xNzIsNC4yNDMsMGwxLjQ0NCwxLjQ0NGMwLjY2OS04Ljc2Niw4LTE1LjY5OCwxNi45MzQtMTUuNjk4QzMyLjg3NSwzLjI1LDQwLjUsMTAuODc2LDQwLjUsMjAuMjV6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQwLjVweCIgaGVpZ2h0PSI0MC41cHgiIHZpZXdCb3g9IjAgMCA0MC41IDQwLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwLjUgNDAuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQwLjUsMjAuMjVjMCw5LjM3NC03LjYyNSwxNy0xNywxN2MtMS42NTYsMC0zLTEuMzQzLTMtM3MxLjM0NC0zLDMtM2M2LjA2NCwwLDExLTQuOTM2LDExLTExYzAtNi4wNjUtNC45MzYtMTEtMTEtMTENCgkJYy01Ljc1NiwwLTEwLjQ4Niw0LjQ0Ny0xMC45NTMsMTAuMDg2bDEuODMyLTEuODMyYzEuMTcxLTEuMTcyLDMuMDcxLTEuMTcyLDQuMjQyLDBjMS4xNzIsMS4xNzEsMS4xNzIsMy4wNzEsMCw0LjI0MmwtNi43NSw2Ljc1DQoJCWMtMC41NjMsMC41NjItMS4zMjYsMC44NzktMi4xMjEsMC44NzljLTAuNzk2LDAtMS41NTktMC4zMTYtMi4xMjEtMC44NzlsLTYuNzUtNi43NWMtMS4xNzItMS4xNzItMS4xNzItMy4wNzEsMC00LjI0Mg0KCQljMS4xNzItMS4xNzIsMy4wNzEtMS4xNzIsNC4yNDMsMGwxLjQ0NCwxLjQ0NGMwLjY2OS04Ljc2Niw4LTE1LjY5OCwxNi45MzQtMTUuNjk4QzMyLjg3NSwzLjI1LDQwLjUsMTAuODc2LDQwLjUsMjAuMjV6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                    alt="back icon"/>
                </Link>
            </button>
            <Route path="/home" component={PokemonList} /> 
            <div className="Profile">
                <div className="ProfileLeft Box">
                    <h5>{pokemon.ntnlnum}</h5>
                    <h3>{pokemon.name}</h3>
                    <p>{pokemon.types.map(type => <span> {type} </span>)}</p>
                    <p>"{pokemon.description}"</p>                  
                </div>
                <div className="ProfileRight">
                    <img src={pokemon.img} alt={pokemon.img} />
                </div>
                
            </div>
            


        </div>
    )
}

export default PokemonDescription