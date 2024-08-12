export function PokemonCard({ pokemon }) {

  return (
    <div className="col">
      <div className="card" style={{ width: "100%" }}>
        <img
          src={pokemon.image}
          className="card-img-top"
          alt={`image from pokemon ${pokemon.name}`}
        />
        <div className="card-body card-body-heigh">
          <h5 className="card-title text-center pb-3">Pokemon: {pokemon.name}</h5>
          <h5>{`HP:${pokemon.hp}`}</h5>
          <h5>{`Damage:${pokemon.damage}`}</h5>
          <h5>{`Defense:${pokemon.defense}`}</h5>
          <h5>{`Speed:${pokemon.speed}`}</h5>
        </div>
      </div>
    </div>
  );
}
