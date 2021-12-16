import { SET_FILM_DETAIL } from "../actions/types/CinemaType";
import { SET_FILMLIST } from "../actions/types/FilmType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 1290,
      tenPhim: "Mad Max: Fury Road",
      biDanh: "mad-max-fury-road",
      trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg",
      moTa: "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
  filmDetail: {},
};

export const FilmReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_FILMLIST: {
      state.arrFilm = action.arrFilm;
      return { ...state };
    }

    case SET_FILM_DETAIL: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
