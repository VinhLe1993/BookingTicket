import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../redux/actions/UserAction";

import * as yup from "yup";


export default function Register(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP07",
      hoTen: "",
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required !"),
      matKhau: yup
        .string()
        .min(8, "Minimum 8 characters")
        .required("Required !"),
      hoTen: yup
        .string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required !"),
      email: yup
        .string()
        .required("Required !")
        .email("Invalid email format !"),
      soDt: yup
        .string()

        .required("Required !"),
    }),
    onSubmit: (data) => {
      const action = signInAction(data);
      dispatch(action);
     

      // console.log("data", data);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <svg
              className="w-10 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              style={{ enableBackground: "new 0 0 225 225" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                ",
                }}
              />
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
            Booking
          </div>
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
  xl:text-bold"
        >
          Sign Up
        </h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your account
              </div>
              <input
                name="taiKhoan"
                type="text"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your account"
              />
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <p className="mt-2 text-base text-red-400">
                  {formik.errors.taiKhoan}
                </p>
              )}
            </div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
              <input
                name="matKhau"
                type="password"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your Password"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className="mt-2 text-base text-red-400">
                  {formik.errors.matKhau}
                </p>
              )}
            </div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your Email"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="mt-2 text-base text-red-400">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Phone Number
              </div>
              <input
                name="soDt"
                type="number"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your Phone Number"
              />
              {formik.errors.soDt && formik.touched.soDt && (
                <p className="mt-2 text-base text-red-400">
                  {formik.errors.soDt}
                </p>
              )}
            </div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Full Name
              </div>
              <input
                name="hoTen"
                type="text"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your Fullname"
              />
              {formik.errors.hoTen && formik.touched.hoTen && (
                <p className="mt-2 text-base text-red-400">
                  {formik.errors.hoTen}
                </p>
              )}
            </div>

            <div className="mt-10">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
              font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
              shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
