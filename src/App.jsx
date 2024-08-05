import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { useState, useEffect } from "react";
import { useGetPokemons } from "./hooks/useGetPokemons";
import { FormInput } from "./components/FormInput";
import { PokemonCard } from "./components/PokemonCard";
import { LoadMoreButton } from "./components/LoadMoreButton";

function App() {
  const [size, setSize] = useState(1);
  const [word, setWord] = useState();
  const { data, loading } = useGetPokemons({ size });

  const handleClick = () => {
    setSize(size + 20);
  };

  const handleSubmit = (keyword) => {
    setWord(keyword);
  };

  return (
    <div className="container-fluid py-5 bg-black content">
      <h1 className="text-center pb-5">Pokemon API</h1>

      <main className="d-flex flex-column">
        <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2  gap-3 justify-content-center">
          <FormInput getQuery={handleSubmit} />

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

        <LoadMoreButton loading={loading} prop={handleClick} />
      </main>
    </div>
  );
}

export default App;
