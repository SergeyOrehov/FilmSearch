import { IStore } from "./types";

export const selectMovies = (state : {searchReducer : IStore}) : IStore['moviesSearch'] => state.searchReducer.moviesSearch;

