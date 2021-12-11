import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class FilmService extends baseService {
    constructor() {
        super()
    }

    filmBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }
    filmList = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}

export const filmService = new FilmService()