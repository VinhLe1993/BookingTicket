import { filmService} from "../../services/FilmService";
import { SET_FILMLIST } from "./types/FilmType";

export const filmAction = () => {
    return async (dispatch) => {
        try {
          const result = await filmService.filmList()
          // console.log("result", result);
    
          dispatch({
            type: SET_FILMLIST,
            arrFilm: result.data.content,
          });
        } catch (errors) {
          // console.log("errors", errors);
        }
      };
}