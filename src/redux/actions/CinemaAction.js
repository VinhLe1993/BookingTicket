import { cinemaService } from "../../services/CinemaService";
import { SET_CINEMA_LIST, SET_FILM_DETAIL } from "./types/CinemaType";

export const cinemaListAction = () => {
  return async (dispatch) => {
    try {
      const result = await cinemaService.cinemaList();

      console.log("result", result.data.content);
      if (result.status === 200) {
        dispatch({
          type: SET_CINEMA_LIST,
          arrCinema: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const filmDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await cinemaService.filmDetailList(id);
      console.log("result", result);
      dispatch({
        type: SET_FILM_DETAIL,
        filmDetail: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
