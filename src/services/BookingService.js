import { GROUPID } from "../util/settings/config";
import { TicketInfo } from "../_core/models/TicketInfo";
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
  bookingTicket = (ticketInfo = new TicketInfo()) => {
    return this.post(`/api/QuanLyDatVe/DatVe`, ticketInfo);
  };
}

export const bookingService = new BookingService();
