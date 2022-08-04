import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
    list : []
}


const moviesReducerCategories = (state : IStore  = initialState, action : AnyAction) => {
    switch(action.type) {
        case  'moviesCategories/setMoviesCategories' :
            return {...state, list : [...action.payload]}
        default :
            return state;
    }
}

export default moviesReducerCategories;