import { IStore } from "./types";

export const selectMovie = (state : {searchMovieDetailsReducer : IStore}) : IStore['item'] => state.searchMovieDetailsReducer.item