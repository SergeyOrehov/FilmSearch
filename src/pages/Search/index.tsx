import React, { useState, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "store/search/actions";
import { selectMovies } from "store/search/selectors";

// routes
import routeMain from "./routes";

// components
import MoviesList from "components/MoviesList";
import PageTitle from "components/PageTitle";

// styles
import "./styles.scss";

const Search = () => {
   const [inputValue, setInputValue] = useState("");
   const [request, setRequest] = useState("");

   const getInputValue = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const startSearch = (inputValue: string) => {
      setRequest(inputValue);
   };

   const dispatch = useDispatch();
   const moviesList = useSelector(selectMovies);

   useEffect(() => {
      dispatch(loadMovies(request));
   }, [dispatch, request]);

   return (
      <div className='container'>
         <div className='listMoviesSearch'>
            <PageTitle title={<h2>Поиск по категории</h2>} />
            <div className='inputBtn'>
               <input className='input' type='text' onChange={getInputValue}></input>
               <button className='btn' onClick={() => startSearch(inputValue)}></button>
            </div>
            <h3>Результаты поиска:</h3>
            {moviesList.length > 0 ? (
               <MoviesList list={moviesList.slice(0, 8)} />
            ) : (
               <div className='info'>
                  <div className='infoText'>Результаты отсутствуют, повторите поиск</div>
               </div>
            )}
         </div>
      </div>
   );
};
export { routeMain };
export default Search;
