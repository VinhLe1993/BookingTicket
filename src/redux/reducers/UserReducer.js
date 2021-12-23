import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { LOGIN_ACTION, SIGNUP_ACTION } from "../actions/types/UserType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  arrUserSignUp: [],
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      const { loginInfo } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(loginInfo));
      localStorage.setItem(TOKEN, loginInfo.accessToken);
      return { ...state, userLogin: loginInfo };
    }
    case SIGNUP_ACTION: {
      
    }

    default:
      return { ...state };
  }
};
