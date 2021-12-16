import { filmService } from "../../services/FilmService";

import { SET_CAROUSEL } from "./types/CarouselType";

export const carouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await filmService.filmBanner();
      console.log("result", result);

      dispatch({
        type: SET_CAROUSEL,
        arrCarousel: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
