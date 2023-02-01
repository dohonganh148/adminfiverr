import requester from "./api";
import apiPath from "./apiPath";

// USER LIST
export const getUserList = async (pageIndex, pageSize) => {
    try{
      const res = await requester({
        method: "GET",
        url: apiPath.USER_LIST,
        params: {
         pageIndex: pageIndex,
         pageSize: pageSize,
       }
      });
      return res;
    } catch(err) {
      console.log(err)
    }
  }

//  DELETE USER
export const deleteUser = async (id) => {
    try{
      const res = await requester({
        method: "DELETE",
        url: apiPath.DELETE_USER,
        params: {
          id: id,
        }
      });
      return res;
    } catch(err) {
      console.log(err);
    }
  }

// GET API lay thong tin User de update
export const getUpdateUser = async (id) => {
    try{
      const res = await requester({
        method: "GET",
        url: apiPath.GET_UPDATE_USER,
        params: {
          id: id,
        }
      });
      return res;
    } catch(err) {
      console.log(err)
    }
  }