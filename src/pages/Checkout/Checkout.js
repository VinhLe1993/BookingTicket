import React, { Fragment, useEffect } from "react";
import { USER_LOGIN } from "../../util/settings/config";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Checkout.module.css";
import { bookingService } from "../../services/BookingService";
import { bookingAction } from "../../redux/actions/BookingAction";
import "./Checkout.css";
import { CloseOutlined } from "@ant-design/icons";
import { BOOKING } from "../../redux/actions/types/BookingType";
import _ from "lodash";

export default function Checkout(props) {
  //   if (!localStorage.getItem(USER_LOGIN)) {
  //     return <Redirect to="/login" />;
  //   }

  const { userLogin } = useSelector((state) => state.UserReducer);

  const { bookingInfo, bookingSeats } = useSelector(
    (state) => state.BookingReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const action = bookingAction(props.match.params.id);
    dispatch(action);
  }, []);

  // console.log (bookingInfo)

  const { thongTinPhim, danhSachGhe } = bookingInfo;

  const renderSeats = () => {
    return danhSachGhe?.map((seats, index) => {
      let classVipSeat = seats.loaiGhe === "Vip" ? "vipSeat" : "";
      let classBookedSeat = seats.daDat === true ? "bookedSeat" : "";
      let classBookingSeat = "";
      //Kiểm tra từng ghế render xem có trang mảng ghế đang đặt hay không
      let indexBookingSeat = bookingSeats.findIndex(
        (bSeat) => bSeat.maGhe === seats.maGhe
      );
      if (indexBookingSeat !== -1) {
        classBookingSeat = "bookingSeat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: BOOKING,
                selectedSeat: seats,
              });
            }}
            disabled={seats.daDat}
            className={`seat ${classVipSeat} ${classBookedSeat} ${classBookingSeat}`}
            key={index}
          >
            {seats.daDat ? (
              <CloseOutlined
                className="font-bold"
                style={{ marginBottom: 3 }}
              />
            ) : (
              seats.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className=" min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-10">
            <div className="justify-center text-gray-600 text-lg font-semibold">
              Màn hình
            </div>
            <div className={`${style["trapezoid"]}`}></div>
            <div className="mt-16">{renderSeats()}</div>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-green-400 text-center font-semibold text-3xl my-5">
            {bookingSeats
              .reduce((total, seats, index) => {
                return (total += seats.giaVe);
              }, 0)
              .toLocaleString()} đ
          </h3>

          <hr />
          <h3 className="text-xl mt-5">{thongTinPhim?.tenPhim}</h3>
          <p>
            Địa điểm: {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
          </p>
          <p className="mb-5">
            Ngày chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
          </p>
          <hr />
          <div className="grid grid-cols-2 my-5">
            <div className="text-left ">
              <span className="text-red-600 m-0 text-base">Ghế</span>
              {bookingSeats.map((seats, index) => {
                return (
                  <span
                    key={index}
                    className="text-green-500 text-lg text semibold"
                  >
                    {" "}
                    {seats.stt}
                  </span>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i className="text-gray-400 text-base font-semibold">Email</i>{" "}
            <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i className="text-gray-400 text-base font-semibold">Phone</i>{" "}
            <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className="h-full flex flex-col justify-end items-center">
            <div className="bg-green-600 text-white font-bold w-full text-center py-3 text-xl">
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
