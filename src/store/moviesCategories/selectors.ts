import { IStore } from "./types";

export const selectList = (state : {moviesReducerCategories : IStore}) : IStore['list'] => state.moviesReducerCategories.list;