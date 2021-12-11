import React, { Fragment, useState } from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const [state, setState] = useState({
    tabPosition: "left",
  });

  const { tabPosition } = state;

  const renderCinemaList = () => {
    return props.arrCinema?.map((cinemaList, index) => {
      let { tabPosition } = state;
      return (
        <TabPane
          tab={
            <img src={cinemaList.logo} className="rounded-full" width="50" />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {cinemaList.lstCumRap?.map((cinema, index) => {
              return (
                <TabPane
                  tab={
                    <div className="w-80 flex items-center">
                      <img src={cinemaList.logo} className="pr-5 w-16" />
                      <div className="ml-2">
                        {cinema.tenCumRap}
                        <p className="text-red-400 m-0">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cinema.danhSachPhim.slice(0,5).map((film, index) => {
                    return (
                      <Fragment key={index}>
                        <div  className="flex my-4">
                          <div className="flex">
                            <img
                              className="w-24 h-24"
                              src={film.hinhAnh}
                              alt={film.tenPhim}
                            />
                            <div className="ml-4 ">
                            <h1 className="text-lg text-indigo-600">{film.tenPhim}</h1>
                            <p>{cinema.diaChi}</p>
                            <div className="grid grid-cols-6 gap-8">
                            {film.lstLichChieuTheoPhim?.slice(0,12).map((showingDate,index)=>{
                              return <NavLink to="/" className="text-base text-red-400">
                                {moment(showingDate.ngayChieuGioChieu).format('hh:mm A')}
                              </NavLink>
                            })}
                            </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <>
      <Tabs tabPosition={tabPosition}>{renderCinemaList()}</Tabs>
    </>
  );
}
