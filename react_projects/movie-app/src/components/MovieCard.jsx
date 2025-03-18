function MovieCard({ movie }) {
  function clickToFavourite() {
    alert("Added to Fav list");
  }

  return (
    <div className="Movie-card">
      <div className="Movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="Movie-overlay">
          <button className="buttom-fav" onClick={clickToFavourite}>
            Fav
          </button>
        </div>
      </div>
      <div className="Movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}


export default MovieCard;