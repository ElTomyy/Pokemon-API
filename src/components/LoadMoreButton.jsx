export function LoadMoreButton({ prop, loading }) {

    const handleClick = () => {
        prop()
    }

  return (
    <div className="d-flex justify-content-center pt-5">
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Load More
        </button>
      )}
    </div>
  );
}
