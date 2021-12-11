import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from "./MultiRowSlick.module.css";
import Film from "../../components/Film/Film";
import FlipCard_Film from "../Film/FlipCard_Film";
import { SET_COMING_SOON, SET_NOW_SHOWING } from "../../redux/actions/types/FilmType";
import { useDispatch, useSelector } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const MultipleRows = (props) => {
  const renderFilm = () => {
    return props.arrFilm.slice(0, 10).map((item, index) => {
      return (
        <div key={index}>
          <FlipCard_Film film={item} />
        </div>
      );
    });
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    //   variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      
      <Slider {...settings}>{renderFilm()}</Slider>
    </div>
  );
};

export default MultipleRows;
