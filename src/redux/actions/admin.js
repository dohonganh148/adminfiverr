import actions from "redux/type";
import * as service from "services/admin";

// GET API lay danh sach nguoi dung
export const fetchUserList = (pageIndex, pageSize) => async (dispatch) => {
  let res = await service.getUserList(pageIndex, pageSize);
  res.data &&
    dispatch({
      type: actions.USER_LIST,
      payload: res.data.content,
    });
};

// GET API lay thong tin User de update
export const fetchUpdateUser = (id) => async (dispatch) => {
  let res = await service.getUpdateUser(id);
  res.data &&
    dispatch({
      type: actions.GET_UPDATE_USER,
      payload: res.data.content,
    });
};

// GET API lay danh sach nguoi dung de search
export const fetchUserListSearch =
  (keyword, pageIndex, pageSize) => async (dispatch) => {
    let res = await service.getUserListSearch(keyword, pageIndex, pageSize);
    res.data &&
      dispatch({
        type: actions.USER_LIST,
        payload: res.data.content,
      });
  };

// GET API lay danh sach dich vu
export const fetchServiceList = (pageIndex, pageSize) => async (dispatch) => {
  let res = await service.getServiceList(pageIndex, pageSize);
  res.data &&
    dispatch({
      type: actions.SERVICE_LIST,
      payload: res.data.content,
    });
};
