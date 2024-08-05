export function FormInput({ getQuery }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    getQuery(query)
  };

  return (
    <div className="col-xl-10 col-md-8 col-10 d-flex flex-row-reverse">
      <header className="header-search">
        <form onSubmit={handleSubmit}>
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
