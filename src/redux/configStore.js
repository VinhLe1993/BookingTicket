import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { FilmReducer } from "./reducers/FilmReducer";
import {CinemaReducer} from "./reducers/CinemaReducer"

const rootReducer = combineReducers({
    CarouselReducer,
    FilmReducer,
    CinemaReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))