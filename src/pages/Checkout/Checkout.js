import React, { Fragment, useEffect } from "react";
import { USER_LOGIN } from "../../util/settings/config";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Checkout.module.css";
import { bookingService } from "../../services/BookingService";
import {
  bookingAction,
  bookingTicketAction,
} from "../../redux/actions/BookingAction";
import "./Checkout.css";
import { CloseOutlined } from "@ant-design/icons";
import { BOOKING } from "../../redux/actions/types/BookingType";
import _ from "lodash";
import { TicketInfo } from "../../_core/models/TicketInfo";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function Checkout(props) {
  // if (!localStorage.getItem(USER_LOGIN)) {
  //   return <Redirect to="/login" />;
  // }

  const { userLogin } = useSelector((state) => state.UserReducer);

  const { bookingInfo, bookingSeats } = useSelector(
    (state) => state.BookingReducer
  );
  console.log(bookingSeats);
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

          <div className="mt-5 flex justify-center">
            <table className="w-2/3 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế Vip</th>
                  <th>Ghế đã được đặt</th>
                  <th>Ghế bạn đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td>
                    <button className="seat text-center">000</button>
                  </td>
                  <td>
                    <button className="seat bookingSeat text-center">
                      000
                    </button>
                  </td>
                  <td>
                    <button className="seat vipSeat text-center">000</button>
                  </td>
                  <td>
                    <button className="seat bookedSeat text-center">000</button>
                  </td>
                  <td>
                    <td>
                      <button className="seat vipSeat text-center">000</button>
                    </td>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="text-green-400 text-center font-semibold text-3xl my-5">
            {bookingSeats
              .reduce((total, seats, index) => {
                return (total += seats.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            đ
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
          <div className=" flex flex-col  items-center">
            <div
              onClick={() => {
                const ticketInfo = new TicketInfo();
                ticketInfo.maLichChieu = props.match.params.id;
                ticketInfo.danhSachVe = bookingSeats;

                console.log(ticketInfo);
                dispatch(bookingTicketAction(ticketInfo));
              }}
              className="bg-green-600 text-white font-bold w-full text-center py-3 text-xl"
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function callback(key) {
  console.log(key);
}

export default function (props) {
  return (
    <div className="p-5">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <CheckOrder {...props} />
        </TabPane>

      </Tabs>
    </div>
  );
}


function CheckOrder (props) {
 return <div className="p-5">
 <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Kết quả đặt vé</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>

 </div>
}