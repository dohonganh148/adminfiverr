import actions from "redux/type";

const initialState = {
  userList: {},
  getUpdateUser: {},
  serviceList: [],
  getServiceDetail: {},
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
    case actions.SERVICE_LIST:
      return {
        ...state,
        serviceList: payload,
      };
      case actions.GET_SERVICE_DETAIL:
        return {
          ...state,
          getServiceDetail: payload,
        };

    default:
      return { ...state };
  }
};

export default reducer;
