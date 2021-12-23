import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { FilmReducer } from "./reducers/FilmReducer";
import {CinemaReducer} from "./reducers/CinemaReducer"
import { UserReducer } from "./reducers/UserReducer"; 
import { BookingReducer } from "./reducers/BookingReducer";

const rootReducer = combineReducers({
    CarouselReducer,
    FilmReducer,
    CinemaReducer,
    UserReducer,
    BookingReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))