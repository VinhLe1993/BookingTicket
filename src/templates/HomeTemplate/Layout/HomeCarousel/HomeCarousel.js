import React, { useEffect } from "react";
import './HomeCarousel.css';
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { carouselAction } from "../../../../redux/actions/CarouselActions";

export default function HomeCarousel(props) {
  const { arrCarousel } = useSelector((state) => state.CarouselReducer);

  

  const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( () => {
     
    const action = carouselAction();

    dispatch(action);

  }, []);

  const renderCarousel = () => {
    return arrCarousel.map((item, index) => {
      return (
        <div key={index}>
          <h3
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} className="w-full opacity-0" alt="123" />
          </h3>
        </div>
      );
    });
  };

  return <Carousel autoplay>{renderCarousel()}</Carousel>;
}
