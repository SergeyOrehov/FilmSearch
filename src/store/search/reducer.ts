import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
    moviesSearch : []
}


const searchReducer = (state : IStore  = initialState, action : AnyAction) => {
    switch(action.type) {
        case  'search/setSearch' :
            return {...state, moviesSearch : [...action.payload]}
        default :
            return state;
    }
}

export default searchReducer;

