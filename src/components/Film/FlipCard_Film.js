import React from "react";
import "./FlipCard_Film.css";
import {PlayCircleOutlined} from '@ant-design/icons'
import { NavLink } from "react-router-dom";


export default function FlipCard_Film(props) {
  const { film } = props;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={film.hinhAnh}
            alt="Avatar"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back relative">
          <div className="absolute top-0 left-0">
            <img
              src={film.hinhAnh}
              alt="Avatar"
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div className="w-full h-full absolute bg-opacity-70 bg-gray-900 flex flex-col justify-center items-center">
            <h1 className="text-white flex text-lg font-semibold">{film.tenPhim}</h1>
            <div className="rounded-full cursor-pointer"><PlayCircleOutlined style={{fontSize:"50px"}}/></div>
            <NavLink to={`/detail/${film.maPhim}`} className="text-lg font-semibold rounded-lg bg-green-400 px-5 py-0.5 mt-5">Đặt vé</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
