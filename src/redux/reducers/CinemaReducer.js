import { SET_CINEMA_LIST } from "../actions/types/CinemaType";

const stateDefault = {
  arrCinema: [],
};

export const CinemaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CINEMA_LIST: {
      state.arrCinema = action.arrCinema;
      return { ...state };
    }

    default:
      return { ...state };
      break;
  }
};
