import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// routes
import routeMain from "./routes";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "store/movieDetails/actions";
import { selectMovie } from "store/movieDetails/selectors";

//image
import Star from "image/star1.png";
import noFoto from "image/noFoto.png";

// types
import { ID } from "types/ID";

// styles
import "./styles.scss";

const MovieDetails = () => {
   const { id } = useParams<ID>();

   const dispatch = useDispatch();
   const movie = useSelector(selectMovie);

   useEffect(() => {
      dispatch(loadMovies(id));
   }, [dispatch, id]);
   return (
      <section className='MovieDetailsPage'>
         <div className='container'>
            {movie ? (
               <div className='movieDetailsWrapper'>
                  <div className='rating'>
                     <img src={Star} alt={Star} />
                     <span>{movie.rating.average}/10</span>
                  </div>
                  <div className='imgItem'>
                     {movie.image ? (
                        <img src={movie.image.original} alt={movie.image.original} />
                     ) : (
                        <div className='noFoto'>
                           <img src={noFoto} alt={noFoto} />
                        </div>
                     )}
                  </div>
                  <div className='descriptionMovie'>
                     <h2>{movie.name}</h2>
                     <div className='info'>
                        <span> Год выхода: </span>
                        <p>{movie.premiered.slice(0, 4)}</p>
                     </div>
                     <div className='info'>
                        <span> Страна: </span>
                        <p>{movie.network.country.name}</p>
                     </div>
                     <div className='info'>
                        <span> Жанр:</span>
                        <p> {movie.genres.join(", ")} </p>
                     </div>
                     <div className='info'>
                        <span className='depiction'> Описание:</span>
                        <p className='text'>{movie.summary.replace(/['<p>','<b>']/g, "")}</p>
                     </div>
                  </div>
               </div>
            ) : (
               <></>
            )}
         </div>
      </section>
   );
};

export { routeMain };
export default MovieDetails;
