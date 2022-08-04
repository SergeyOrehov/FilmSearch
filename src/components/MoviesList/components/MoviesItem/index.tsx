import React from "react";

//nav
import { NavLink } from "react-router-dom";

//pages
import { routeMain as routeMovieDetails } from "pages/MovieDetails";

//types
import { IMoviesShow } from "types/IMoviesShow";

//image
import noFoto from "image/noFoto.png";

//style
import "./styles.scss";

interface IMoviesItemParams {
   item: IMoviesShow["show"];
}

const MoviesItem: React.FC<IMoviesItemParams> = ({ item }) => {
   return (
      <NavLink to={routeMovieDetails(item.id)} className='description'>
         <div className='imgItem'>
            {item.image ? (
               <img src={item.image.original} alt={item.image.original} />
            ) : (
               <div className='noFoto'>
                  <img src={noFoto} alt={noFoto} />
               </div>
            )}
         </div>
         <div className='title'>{item.name}</div>
         <div className='yearCountry'>
            {item.premiered ? <span>{item.premiered.slice(0, 4)},</span> : <></>}
            {item.network ? <span>{item.network.country.name}</span> : <></>}
         </div>
         <div className='genres'>{item.genres.join(", ")}</div>
      </NavLink>
   );
};

export default MoviesItem;
