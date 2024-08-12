import { PokemonCard } from "./PokemonCard";

export function DisplayPokemons({ data, newWord }) {
  return (
    <>
      {data ? (
        data.map((pokemon, index) => {
          return <PokemonCard newWord={newWord} key={index} pokemon={pokemon} keyProp={index} />;
        })
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}
