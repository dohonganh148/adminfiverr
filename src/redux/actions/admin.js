import actions from "redux/type";
import * as service from "services/admin";

// GET API lay danh sach nguoi dung
export const fetchUserList = (pageIndex, pageSize) => async(dispatch) => {
    let res = await service.getUserList(pageIndex, pageSize);
    res.data && dispatch({
        type: actions.USER_LIST,
        payload: res.data.content,
    });
};

// GET API lay thong tin User de update
export const fetchUpdateUser = (id) => async (dispatch) => {
    let res = await service.getUpdateUser(id);
    res.data && dispatch({
        type: actions.GET_UPDATE_USER,
        payload: res.data.content,
    })
}