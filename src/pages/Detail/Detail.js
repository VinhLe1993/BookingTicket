import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
//antd
import { Statistic, Col } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FilmReducer } from "../../redux/reducers/FilmReducer";
import { SET_FILM_DETAIL } from "../../redux/actions/types/CinemaType";
import { filmDetailAction } from "../../redux/actions/CinemaAction";
import moment from "moment";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.FilmReducer.filmDetail);

  console.log({ filmDetail });
  const dispatch = useDispatch();

  useEffect(() => {
    //Lấy thông tin param từ url
    let { id } = props.match.params;

    dispatch(filmDetailAction(id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,

        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <CustomCard
        style={{ minHeight: "100vh", paddingTop: 150 }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={80} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-4 col-start-4">
            <div className="grid grid-cols-2">
              <img
                src={filmDetail.hinhAnh}
                style={{ width: 250, height: 350 }}
                className="col-span-1"
              />
              <div className="my-auto">
                <h1 className="text-4xl text-white text-semibold">
                  {filmDetail.tenPhim}
                </h1>
                <p className="text-sm text-white">
                  Ngày công chiếu:{" "}
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="mt-10">{filmDetail.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 my-auto ml-40">
            <Col span={12}>
              <p className="text-white text-lg text-semibold m-0">Rating</p>
              <Statistic
                value={filmDetail.danhGia * 10}
                suffix="/ 100"
                prefix={<LikeOutlined />}
                valueStyle={{
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: "600",
                }}
              />
              <Rate
                style={{ marginTop: "1rem" }}
                disabled
                allowHalf
                value={filmDetail.danhGia / 2}
              />
            </Col>
          </div>
        </div>

        <div
          className="container mx-auto max-w-xl"
          style={{ marginTop: "5rem" }}
        >
          <Tabs
            tabPosition={"left"}
            className="bg-gray-100  rounded-md"
            style={{ padding: "0.5rem" }}
          >
            {filmDetail.heThongRapChieu?.map((cineLst, index) => {
              return (
                <TabPane
                  tab={
                    <div>
                      <img
                        src={cineLst.logo}
                        width={50}
                        className="rounded-full"
                      />
                      {cineLst.tenHeThongRap}
                    </div>
                  }
                  key={index}
                >
                  {cineLst.cumRapChieu?.map((cine,index) => {
                    return <div className="mt-5" key={index}>
                      <div className="flex flex-row">
                        <div className="ml-2">
                          <p className="text-lg mb-0">{cine.tenCumRap}</p>
                          <p className="text-xs font-semibold text-gray-400">{cine.tenCumRap}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-4">
                        {cine.lichChieuPhim?.slice(0,12).map((date,index) => {
                          return <NavLink to={`/checkout/${date.maLichChieu}`} key={index} className="col-span-1 text-indigo-600 mt-3 font-semibold">
                              {moment(date.lichChieuGioChieu).format('hh:mm A')}
                          </NavLink>
                        })}
                      </div>
                    </div>
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
