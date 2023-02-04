import React, { useEffect, useState } from "react";
import s from "./ManagementService.module.scss";
import { Button, Input, Table } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceList } from "redux/actions/admin";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteService } from "services/admin";

const ManagementService = () => {
  const { Search } = Input;

  const profile = useSelector((state) => state?.authen?.profile);

  const columns = [
    {
      title: <div className={s.titleId}>ID</div>,
      dataIndex: "id",
      sorter: (a, b) => a.age - b.age,
      width: "10%",
    },
    {
      title: <div className={s.titleImg}>Hình ảnh</div>,
      dataIndex: "hinhAnh",
      width: "15%",
    },
    {
      title: <div className={s.titleName}>Tên công việc</div>,
      dataIndex: "tenCongViec",
      sorter: (a, b) => a.name.length - b.name.length,
      width: "20%",
    },
    {
      title: <div className={s.titleDesc}>Mô tả</div>,
      dataIndex: "moTa",
      width: "25%",
    },
    {
      title: <div className={s.titleDesc}>Đánh giá</div>,
      dataIndex: "danhGia",
      width: "10%",
    },
    {
      title: <div className={s.titleDesc}>Giá tiền</div>,
      dataIndex: "giaTien",
      width: "10%",
    },
    {
      title: <div className={s.titleOption}>Tuỳ chọn</div>,
      dataIndex: "action",
      width: "10%",
      hidden: profile?.role === "ADMIN" ? false : true,
    },
  ].filter((item) => !item.hidden);;
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 4;
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.admin.serviceList);

  useEffect(() => {
    dispatch(fetchServiceList(1, 4));
  }, [dispatch]);

  const onChange = (pagination, sorter) => {
    dispatch(fetchServiceList(pagination.current, pagination.pageSize));
    setPageIndex(pagination.current);
  };
  const data = serviceList?.data?.map((item, index) => {
    return {
      key: index,
      id: <div>{item.id}</div>,
      hinhAnh: <img alt="" src={item.hinhAnh} />,
      tenCongViec: <div className={s.name}>{item.tenCongViec}</div>,
      moTa: <div className={s.desc}>{item.moTa.substr(0, 70) + "..."}</div>,
      danhGia: <div>{item.danhGia}</div>,
      giaTien: <div>{item.giaTien}</div>,
      action: (
        <div className={s.option}>
          <div className={s.update}>
            <Link to={`/updatejob/${item.id}`}>
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
    let res = await deleteService(id);
    if (res.data.statusCode === 200) {
      dispatch(fetchServiceList(pageIndex, pageSize));
    }
  };
  return (
    <div className={s.content}>
      <h4>Quản lý công việc</h4>
      {profile?.role === "ADMIN" ? (
        <div className={s.btn}>
          <Link to="/addjob">
            <Button type="primary">Thêm công việc</Button>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className={s.search}>
        <Search placeholder="Nhập vào tên công việc" enterButton />
      </div>
      <div className={s.table}>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={{ pageSize, total: serviceList.totalRow }}
        />
      </div>
    </div>
  );
};

export default ManagementService;
