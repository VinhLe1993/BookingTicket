import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class BookingService extends baseService {
  constructor() {
    super();
  }

  bookingDetail = (bookingID) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${bookingID}`
    );
  };
}

export const bookingService = new BookingService();
