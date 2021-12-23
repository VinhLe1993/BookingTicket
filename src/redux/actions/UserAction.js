import { userService } from "../../services/UserService";
import { LOGIN_ACTION } from "./types/UserType";
import { SIGNUP_ACTION } from "./types/UserType";
import { history } from "../../App";
import { result } from "lodash";

export const loginAction = (userInfo) => {
  return async (dispatch) => {
    try {
      const result = await userService.loginInfo(userInfo);

      if (result.data.status === 200) {
        dispatch({
          type: LOGIN_ACTION,
          userInfo: result.data.content,
        });
        //Chuyển hướng về trang trước đó
        history.goBack();
      }

      console.log(result, "result");
    } catch (errors) {
      console.log("errors", errors.response.data);
    }
  };
};

export const signInAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await userService.signUp(data);
      if (res.data.status === 200) {
        dispatch({
          type: SIGNUP_ACTION,
          data: result.data.content,
        });
        alert("Đăng ký thành công !");
        history.push("/login");
      }
    } catch (err) {
      console.log("err", err);
    }
  };
};
