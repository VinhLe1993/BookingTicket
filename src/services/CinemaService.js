import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class CinemaService  extends baseService {
    constructor() {
        super()
    }

    cinemaList = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }

    filmDetailList = (filmID) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmID}`)
    }
}

export const cinemaService = new CinemaService()