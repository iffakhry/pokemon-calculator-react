import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';

const AbilityPokemon = ({ abilityName}) => <li>{abilityName}</li>

const Pokemon = ({ pokemonName, classActiveId, id, onClick}) => (
  <li onClick={()=> onClick({id,pokemonName})} id={id} className={classActiveId === id ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action false" }>{pokemonName}</li>
)

const DetailLabel = ({url, pokemonName}) =>{
  // const [idPokemon, setIdPokemon] = useState (0);
  const [abilitiesList, setAbilitiesList] = useState ([]);
  useEffect(() =>{
    const getData = async()=>{
      const response = await fetch(url);
      const data = await response.json();
      const { abilities } = data;
      setAbilitiesList(abilities);
      console.log("abilities", abilities);
    }
    if(url){
      getData();
    }
  }, [url])

  return(
    <div className="mt-2">
    <h1>{"Detail: " + pokemonName}</h1>
    <h3>{"Abilities:"}</h3>
    <ol>
    {
      abilitiesList.map((ability, index) => (
          <AbilityPokemon 
              key={index} 
              abilityName={ability['ability'].name} 
            /> 
        )
      )
    }
    </ol>
    </div>
  );
};

function App() {
  const [pokemonList, setPokemonList] = useState ([]);
  const [pokemonUrlSelected, setPokemonUrlSelected] = useState ();
  const [pokemonNameSelected, setPokemonNameSelected] = useState ('-');
  const [activeIdClick, setActiveIdClick] = useState (null);

  useEffect(() =>{
    const getData = async()=>{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      const { results } = data;
      setPokemonList(results);
      console.log("data ", data);
    }
      getData();
  }, [])

  const handleClick = (e) => {
    console.log(e);
    if (e) {
      // setEmotion(e.target.value);
      setActiveIdClick(e.id);
      setPokemonUrlSelected(e.id);
      setPokemonNameSelected(e.pokemonName);
      // console.log("click ",e.target.id);
      // console.log("nama ",e.target.value);
    }
  };

  return (
    <div className="container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
      </ul>
      <DetailLabel url={pokemonUrlSelected} pokemonName={pokemonNameSelected}/>

      {pokemonList.map((pokemon) => (
        <Pokemon 
          onClick={handleClick}
          key={pokemon.url} 
          pokemonName={pokemon.name}
          id={pokemon.url}
          classActiveId={activeIdClick}
        />
      )
      )
      }
      
    </div>

  );
}

export default App;
