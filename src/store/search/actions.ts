import { Dispatch } from "redux"
import { IStore } from "./types"

import searchMovies from "services/searchMovies"

export const setMoviesAction = (moviesSearch : IStore['moviesSearch']) => {
    return {
        type : 'search/setSearch',
        payload : moviesSearch
    }
}

export const loadMovies = (jenre : string) => async (dispath : Dispatch) => {
    try {
        const response = await searchMovies(jenre)
        dispath(setMoviesAction(response.data))
    } catch (e) {
        console.log(e,'Произошла ошибка')
    }
}


