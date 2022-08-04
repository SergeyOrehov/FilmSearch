import React from "react";

//nav
import { NavLink } from "react-router-dom";

//pages
import { routeMain as routeMovieDetails } from "pages/MovieDetails";

//types
import { IMoviesDetails } from "types/IMoviesDetails";

//styles
import "./styles.scss";

interface IMoviesItemParams {
   item: IMoviesDetails;
}

const MoviesItemCategories: React.FC<IMoviesItemParams> = ({ item }) => {
   return (
      <NavLink to={routeMovieDetails(item.id)} className='descriptionCategories'>
         <div className='imgItem'>
            <img src={item.image.original} alt={item.image.original} />
         </div>
         <div className='movieDescription'>
            <div className='title'>{item.name}</div>
            <div className='genres'>{item.genres.join(", ")}</div>
         </div>
      </NavLink>
   );
};

export default MoviesItemCategories;
