import React, { useEffect } from "react";

// routes
import routeMain from "./routes";

// components
import MoviesList from "components/MoviesList";
import PageTitleMain from "components/PageTitleMain";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "store/movies/actions";
import { selectList } from "store/movies/selectors";

// styles
import "./styles.scss";

const MainPage = () => {
   const dispatch = useDispatch();
   const moviesList = useSelector(selectList);
   useEffect(() => {
      dispatch(loadMovies());
   }, [dispatch]);
   return (
      <section className='mainPage'>
         <div className='container'>
            <PageTitleMain title={<h1>MOVIESinfo</h1>} />
            <div className='listMoviesMainPage'>
               {moviesList.length > 0 && <MoviesList list={moviesList.slice(0, 8)} />}
            </div>
         </div>
      </section>
   );
};

export { routeMain };
export default MainPage;
