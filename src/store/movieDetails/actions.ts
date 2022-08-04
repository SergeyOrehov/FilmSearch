import { Dispatch } from "redux"
import { IStore } from "./types"

import searchMovieDetails from "services/searchMovieDetails"

export const setMoviesDetailsAction = (movie : IStore['item']) => {
    return {
        type : 'movieDetails/setMovieDetails',
        payload : movie
    }
}

export const loadMovies = (id : string) => async (dispatch : Dispatch) => {
    try {
        const response = await searchMovieDetails(id)
        console.log(response.data)
        dispatch(setMoviesDetailsAction(response.data))
    } catch (e) {
        console.log(e,'Произошла ошибка')
    }
}