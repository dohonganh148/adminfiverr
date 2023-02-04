import React, { useEffect, useState } from "react";
import s from "./ManagementUser.module.scss";
import { Button, Input, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList, fetchUserListSearch } from "redux/actions/admin";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteUser } from "services/admin";
import { Link } from "react-router-dom";

const ManagementUser = () => {
  const { Search } = Input;

  const profile = useSelector((state) => state?.authen?.profile);
  console.log(profile);

  const columns = [
    {
      title: <div className={s.titleId}>ID</div>,
      dataIndex: "userId",
      width: "5%",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: <div className={s.titleName}>Tài khoản</div>,
      dataIndex: "name",
      width: "15%",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: <div className={s.titlePassword}>Mật khẩu</div>,
      dataIndex: "password",
      width: "15%",
    },
    {
      title: <div className={s.titleEmail}>Email</div>,
      dataIndex: "email",
      width: "20%",
    },
    {
      title: <div className={s.titleTel}>Số điện thoại</div>,
      dataIndex: "telNum",
      width: "15%",
    },
    {
      title: <div className={s.titleOption}>Tuỳ chọn</div>,
      dataIndex: "action",
      width: "10%",
      hidden: profile?.role === "ADMIN" ? false : true,
    },
  ].filter((item) => !item.hidden);
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 6;
  const userList = useSelector((state) => state.admin.userList);

  useEffect(() => {
    dispatch(fetchUserList(1, 6));
  }, [dispatch]);

  const onChange = (pagination, sorter) => {
    dispatch(fetchUserList(pagination.current, pagination.pageSize));
    setPageIndex(pagination.current);
  };
  const data = userList?.data?.map((item, index) => {
    return {
      key: index,
      userId: <div>{item.id}</div>,
      name: <div className={s.name}>{item.name}</div>,
      password: <div>{item.password}</div>,
      email: <div>{item.email}</div>,
      telNum: <div>{item.phone}</div>,
      action: (
        <div className={s.option}>
          <div className={s.update}>
            <Link to={`/updateuser/${item.id}`}>
              <BsPencilSquare />
            </Link>
          </div>
          <div onClick={() => handleDelete(item.id)} className={s.delete}>
            <RiDeleteBin6Line />
          </div>
        </div>
      ),
    };
  });

  const handleDelete = async (id) => {
    let res = await deleteUser(id);
    if (res.data.statusCode === 200) {
      dispatch(fetchUserList(pageIndex, pageSize));
    }
  };

  const onSearch = (value) => {
    if (!value) {
      dispatch(fetchUserList(6, 1));
    } else {
      dispatch(fetchUserListSearch(value));
    }
  };
  return (
    <div className={s.content}>
      <h4>Quản lý người dùng</h4>
      {profile?.role === "ADMIN" ? (
        <div className={s.btn}>
          <Link to="/adduser">
            <Button type="primary">Thêm quản trị viên</Button>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className={s.search}>
        <Search
          placeholder="Nhập vào tài khoản"
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div className={s.table}>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={{ pageSize, total: userList.totalRow }}
        />
      </div>
    </div>
  );
};

export default ManagementUser;
