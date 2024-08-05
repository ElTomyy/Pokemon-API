export function PokemonCard({ pokemon }) {

  return (
    <div className="col d-flex justify-content-center">
      <div className="card" style={{ minWidth: "18rem" }}>
        <img
          src={pokemon.image}
          className="card-img-top"
          alt={`imagen del pokemon ${pokemon.name}`}
        />
        <div className="card-body">
          <h5 className="card-title">Pokemon: {pokemon.name}</h5>
          <p className="card-text">Descripicon del pokemon xD</p>
          <a href="#" className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}
