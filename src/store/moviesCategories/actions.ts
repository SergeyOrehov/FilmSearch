import { Dispatch } from "redux"
import { IStore } from "./types"

import getMoviesCategories from "services/getMoviesCategories"

export const setMoviesActionCategories = (list : IStore['list']) => {
    return {
        type : 'moviesCategories/setMoviesCategories',
        payload : list
    }
}

export const loadMovies = () => async (dispath : Dispatch) => {
    try {
        const response = await getMoviesCategories()
        dispath(setMoviesActionCategories(response.data))
    } catch (e) {
        console.log(e,'Произошла ошибка')
    }
}