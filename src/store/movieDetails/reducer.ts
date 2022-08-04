import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
    item : null 
}


const searchMovieDetailsReducer = (state : IStore = initialState, action : AnyAction) => {
    switch(action.type) {
        case  'movieDetails/setMovieDetails' :
            return {...state, item : action.payload}
        default :
            return state;
    }
}

export default searchMovieDetailsReducer;

