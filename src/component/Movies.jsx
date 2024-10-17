import { Movie } from "./Movie";

function Movies(props) {
  const { movies = []} = props;

  return <div className="list">
      {movies.length ? (
        movies.map ((movie) => 
              <Movie {...movie} />)
        ) : (
          <h3>Ничего не найдено</h3>
      )}
    </div>
}
export { Movies };
