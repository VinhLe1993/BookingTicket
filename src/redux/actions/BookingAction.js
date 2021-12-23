import { bookingService } from "../../services/BookingService";
import {SET_BOOKING_DETAIL} from "./types/BookingType"

export const bookingAction = (bookingID) => {
  return async (dispatch) => {
    try {
      const result = await bookingService.bookingDetail(bookingID);
      console.log ('result', result)
      if (result.status === 200) {
          dispatch ({
              type: SET_BOOKING_DETAIL,
              bookingInfo: result.data.content
          })
      }
    } catch (errors) {
      console.log("errors", errors);
      console.log("errors", errors.response?.data);
    }
  };
};
