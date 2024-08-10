export function PokemonCard({ pokemon }) {
  return (
    <div className="col">
      <div className="card" style={{ width: "100%" }}>
        <img
          src={pokemon.image}
          className="card-img-top"
          alt={`imagen del pokemon ${pokemon.name}`}
        />
        <div className="card-body card-body-heigh d-flex justify-content-center align-content-around flex-wrap">
          <h5 className="card-title">Pokemon: {pokemon.name}</h5>
          <p className="card-text">Pokemon numero: {pokemon.id}</p>
          <a href="#" className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}
