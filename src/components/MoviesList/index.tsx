import React from "react";

//components
import MoviesItem from "./components/MoviesItem";

//types
import { IMoviesShow } from "types/IMoviesShow";

// styles
import "./styles.scss";

interface IMoviesListParams {
   list: IMoviesShow[];
}

const MoviesList: React.FC<IMoviesListParams> = ({ list }) => (
   <div className='MoviesList'>
      {list.map((movies: IMoviesShow) => (
         <MoviesItem key={movies.show.id} item={movies.show} />
      ))}
   </div>
);

export default MoviesList;
