import actions from "redux/type";
import * as service from "services/authen";

export const loginAction = (userLogin) =>  async (dispatch) => {
    let res = await service.userLogin(userLogin);
    res.data && dispatch({
        type: actions.SET_PROFILE,
        payload: res.data.content,
    });
    localStorage.setItem("token", res.data.content.token);
    localStorage.setItem("id",JSON.stringify(res.data?.content?.user?.id))
};

export const fetchProfileAction = () => async (dispatch) => {
    let res = await service.getProfile(localStorage.getItem("id"));
    res.data && dispatch({
        type: actions.SET_PROFILE,
        payload: res.data.content,
    })
}

// LOGOUT
export const logoutAction = () => async(dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("id")
    dispatch({
        type: actions.SET_PROFILE,
        payload: null,
    })
}
