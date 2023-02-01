import actions from "redux/type";

const initialState = {
  userList: {},
  getUpdateUser: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.USER_LIST:
      return {
        ...state,
        userList: payload,
      };
      case actions.GET_UPDATE_USER:
        return {
          ...state,
          getUpdateUser: payload,
        };

    default:
      return { ...state };
  }
};

export default reducer;