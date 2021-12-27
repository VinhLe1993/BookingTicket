import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { LOGIN_ACTION } from "../actions/types/UserType";

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
      const { userInfo } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(userInfo));
      localStorage.setItem(TOKEN, userInfo.accessToken);
      return { ...state, userLogin: userInfo };
    }

    default:
      return { ...state };
  }
};
