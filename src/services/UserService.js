import { baseService } from "./baseService";
import * as yup from "yup";

// export const signupUserSchema = yup.object().shape({
//     taiKhoan: yup.string().required("Tài khoản không được để trống !"),
//     matKhau: yup.string().required("Mật khẩu không được để trống !"),
//     hoTen: yup.string().required("Họ tên không được để trống !"),
//     email: yup
//       .string()
//       .required("Email không được để trống !")
//       .email("Không đúng định dạng Email !"),
//     soDT: yup
//       .string()
//       .matches(/^[0-9]+$/)
//       .required("Số điện thoại không được để trống"),
//     maNhom: yup.string().required("ID is required !"),
//   });
  
//   export const editUserSchema = yup.object().shape({
//     email: yup.string().email("Email không hợp lệ !"),
//     soDT: yup.string().matches(/^[0-9]+$/),
//   });

export class UserService extends baseService {
    constructor() {
        super()
    }

    signIn = (userInfo) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, userInfo)
    }

    signUp = (data) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`,data)
    }
    
}

export const userService = new UserService()