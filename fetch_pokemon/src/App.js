import { wait } from '@testing-library/user-event/dist/utils';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import PokemonThumb from './components/PokemonThumb';


function App() {
  
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    console.log(data);

    function createPokemonObject(results)  {
      results.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()

        setAllPokemons( currentList => [...currentList, data])
        //await allPokemons.sort((a, b) => a.id - b.id)
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons)

  }

  useEffect(() =>{
    getAllPokemons()

  }, [])
  return (
    <div className="container">
      <h1>P O K E M O N</h1>
      <div className='pokemon-container'>
        <div className='all-container'>

          {allPokemons.map((pokemon, index) =>
          <PokemonThumb
          key={index}
          id={pokemon.id}
          image={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
        />)}

        </div>
        
      </div>
      <button className='button' onClick={() => getAllPokemons()}><i class="fa-solid fa-loader">LOAD MORE</i></button>
    </div>
  );
}

export default App;
