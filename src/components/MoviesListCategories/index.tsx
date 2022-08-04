import React from "react";

//components
import MoviesItemCategories from "./components/MoviesItemCategories";

//types
import { IMoviesDetails } from "types/IMoviesDetails";

// styles
import "./styles.scss";

interface IMoviesListParams {
   list: IMoviesDetails[];
}

const MoviesListCategories: React.FC<IMoviesListParams> = ({ list }) => (
   <div className='MoviesListCategories'>
      {list.map((movies: IMoviesDetails) => (
         <MoviesItemCategories key={movies.id} item={movies} />
      ))}
   </div>
);

export default MoviesListCategories;
