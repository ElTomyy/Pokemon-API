import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonCard from "./components/PokemonCard";
import { useGetPokemons } from "./hooks/useGetPokemons";

const URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [size, setSize] = useState(1);
  //const [word, setWord] = useState();
  const  {data } = useGetPokemons({size})

  const handleClick = () => {
    setSize(size + 20);
  };

  return (
    <main className="container-fluid py-5 bg-black d-flex flex-column">
      <div className="row row-cols-5 gap-3 justify-content-center">
        {data ? (
          data.map((pokemon, index) => {
            return (
              <PokemonCard key={index} pokemon={pokemon} keyProp={index} />
            );
          })
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center pt-5">
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Load More
        </button>
      </div>
    </main>
  );
}

export default App;
