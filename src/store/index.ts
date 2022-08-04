import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import moviesReducerCategories from "./moviesCategories/reducer";
import searchReducer from "./search/reducer";
import moviesReducer from "./movies/reducer";
import searchMovieDetailsReducer from "./movieDetails/reducer";


const rootReducer = combineReducers({
    moviesReducerCategories, moviesReducer, searchReducer,searchMovieDetailsReducer
})

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;