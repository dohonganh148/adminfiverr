import requester from "./api";
import apiPath from "./apiPath";

// USER LIST
export const getUserList = async (pageIndex, pageSize) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.USER_LIST,
      params: {
        pageIndex: pageIndex,
        pageSize: pageSize,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

//  DELETE USER
export const deleteUser = async (id) => {
  try {
    const res = await requester({
      method: "DELETE",
      url: `${apiPath.DELETE_USER}`,
      params: {
        id,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// ADD USER
export const addUser = async (values) => {
  try {
    const res = await requester({
      method: "POST",
      url: apiPath.ADD_USER,
      data: values,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// GET API lay thong tin User de update
export const getUpdateUser = async (id) => {
  try {
    const res = await requester({
      method: "GET",
      url: `${apiPath.GET_UPDATE_USER}/${id}`,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// UPDATE USER
export const updateUser = async (values, id) => {
  try {
    const res = await requester({
      method: "PUT",
      url: `${apiPath.UPDATE_USER}/${id}`,
      data: values,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// lấy danh sách người dùng để search
export const getUserListSearch = async (keyword, pageIndex, pageSize) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.USER_LIST,
      params: {
        keyword,
        pageIndex,
        pageSize
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// SERVICE LIST
export const getServiceList = async (pageIndex, pageSize) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.SERVICE_LIST,
      params: {
        pageIndex: pageIndex,
        pageSize: pageSize,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

//  DELETE SERVICE
export const deleteService = async (id) => {
  try {
    const res = await requester({
      method: "DELETE",
      url: `${apiPath.DELETE_SERVICE}/${id}`,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// ADD SERVICE
export const addService = async (values) => {
  try {
    const res = await requester({
      method: "POST",
      url: apiPath.ADD_SERVICE,
      data: values,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// GET API lay thong tin Service de update
export const getServiceDetail = async (id) => {
  try {
    const res = await requester({
      method: "GET",
      url: `${apiPath.GET_SERVICE_DETAIL}/${id}`,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// UPDATE SERVICE
export const updateService = async (values, id) => {
  try {
    const res = await requester({
      method: "PUT",
      url: `${apiPath.UPDATE_SERVICE}/${id}`,
      data: values,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};