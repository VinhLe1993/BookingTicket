import { BOOKING, SET_BOOKING_DETAIL } from "../actions/types/BookingType";

const stateDefault = {
  bookingInfo: {},
  bookingSeats: [],
};


export const BookingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_BOOKING_DETAIL: {
      state.bookingInfo = action.bookingInfo;

      return { ...state };
    }
    case BOOKING: {
      // cập nhật danh sách ghế đang đặt
      let bookingSeatUpdate = [...state.bookingSeats];

      let index = bookingSeatUpdate.findIndex(sltSeat => sltSeat.maGhe === action.selectedSeat.maGhe)
        
    
      if (index !== -1) {
        //Nếu tìm thấy ghế được chọn trong mảng => ghế này đã được chọn trước đó => xóa đi
        bookingSeatUpdate.splice(index, 1);
      } else {
        bookingSeatUpdate.push(action.selectedSeat);
      }
      return { ...state, bookingSeats: bookingSeatUpdate};
    }
    default:
      return { ...state };
      break;
  }
};
