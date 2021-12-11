import React, { useEffect, useState } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";

import MultipleRows from "../../components/RSlick/MultiRowSlick";
import { filmAction } from "../../redux/actions/FilmAction";
import { cinemaListAction } from "../../redux/actions/CinemaAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";


export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.FilmReducer);
  const { arrCinema } = useSelector((state) => state.CinemaReducer);
  const dispatch = useDispatch();

  

  // const renderFilm = () => {
  //   return arrFilm.map((film, index) => {
  //     return <Film key={index} />;
  //   });
  // };

  useEffect(() => {
    const action = filmAction();
    dispatch(action);
    dispatch(cinemaListAction())
  });

  return (
    <div className="container mx-auto">
      <HomeCarousel />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto h-auto">
          <MultipleRows arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap mt-10 justify-center">{renderFilm()}</div> */}
        </div>
      </section>

      <HomeMenu arrCinema={arrCinema}/>
    </div>
  );
}
