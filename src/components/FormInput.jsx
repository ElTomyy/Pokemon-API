export function FormInput({ getQuery, getFilter }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    getFilter({filter: null})
    getQuery({ keyword: query });    
  };

  const handleFilter = (event) => {
    const filter = event.target.value
    getQuery({keyword: null})
    getFilter({filter})
  }


  return (
    <div className="col-xl-10 col-md-9 col-sm-8 col-10">
      <header className="header-search">
        <div>
          <select
            onChange={handleFilter}
            className="form-select select-group"
            aria-label="Default select example"
          >
            <option value="All">All</option>
            <option value="1">Normal</option>
            <option value="2">Fighting</option>
            <option value="3">Flying</option>
            <option value="4">Poison</option>
            <option value="5">Ground</option>
            <option value="6">Rock</option>
            <option value="7">Bug</option>
            <option value="8">Ghost</option>
            <option value="9">Steel</option>
            <option value="10">Fire</option>
            <option value="11">Water</option>
            <option value="12">Grass</option>
            <option value="13">Electric</option>
            <option value="14">Psychic</option>
            <option value="15">Ice</option>
            <option value="16">Dragon</option>
            <option value="17">Dark</option>
            <option value="18">Fairy</option>
          </select>
        </div>
        <form
          onSubmit={handleSubmit}
        >
          <div className="input-group mb-3">
            <input
              name="query"
              type="text"
              className="form-control"
              placeholder="Pikachu, Mewtwo..."
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}
