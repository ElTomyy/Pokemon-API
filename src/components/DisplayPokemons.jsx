import { PokemonCard } from "./PokemonCard";

export function DisplayPokemons({ data }) {
  return (
    <>
      {data ? (
        data.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} keyProp={index} />;
        })
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}
