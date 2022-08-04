import { Dispatch } from "redux"
import { IStore } from "./types"

import getMovies from "services/getMovies"

export const setMoviesAction = (list : IStore['list']) => {
    return {
        type : 'movies/setMovies',
        payload : list
    }
}

export const loadMovies = () => async (dispath : Dispatch) => {
    try {
        const response = await getMovies()
        dispath(setMoviesAction(response.data))
    } catch (e) {
        console.log(e,'Произошла ошибка')
    }
}