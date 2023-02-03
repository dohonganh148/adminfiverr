import requester from "./api";
import apiPath from "./apiPath";

// POST thông tin user login
export const userLogin = async (userLogin) => {
    try{
        const res = await requester({
            method: "POST",
            url: apiPath.PROFILE,
            data: userLogin,
        });
        return res;
    } catch(err) {
        throw(err)
    }
};

// Lấy thông tin user đã đăng nhập
export const getProfile = async (id) => {
    try{
        const res = await requester({
            method: "GET",
            url: apiPath.PROFILE_ACTION,
            data: id,
        });
        return res;
    } catch(err) {
        console.log(err);
    }
};


// POST thong tin user signup
export const signUp = async (userSignup) => {
    try{
        const res = await requester({
            method: "POST",
            url: apiPath.USER_SIGNUP,
            data: userSignup,
        });
        return res;
    } catch(err) {
        console.log(err)
    }
}
