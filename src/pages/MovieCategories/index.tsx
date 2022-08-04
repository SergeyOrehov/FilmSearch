import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "store/moviesCategories/actions";
import { selectList } from "store/moviesCategories/selectors";

// components
import MoviesListCategories from "components/MoviesListCategories";

// routes
import routeMain from "./routes";

// styles
import "./styles.scss";

const MovieCategories = () => {
   const dispatch = useDispatch();
   const moviesList = useSelector(selectList);

   useEffect(() => {
      dispatch(loadMovies());
   }, [dispatch]);

   return (
      <section className='moviesCategoriesPage'>
         <div className='container'>
            <div className='listMoviesCategoriesPage'>
               <div className='selectCategories'>
                  Выбранная категория : <span> Horror</span>
               </div>
               {moviesList.length > 0 && <MoviesListCategories list={moviesList.slice(0, 12)} />}
            </div>
         </div>
      </section>
   );
};

export { routeMain };
export default MovieCategories;
