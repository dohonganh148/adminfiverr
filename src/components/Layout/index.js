import React, { useState } from "react";
import s from "./Layout.module.scss";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import ManagementUser from "page/ManagementUser";
import ManagementService from "page/ManagementService";
import UpdateUser from "page/UpdateUser";
import UpdateService from "page/UpdateService";
import Login from "page/Login";
import Signup from "page/Signup";

const { Header, Content, Sider } = Layout;

const LayoutAdmin = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menu = [
    {
      label: (
        <NavLink to="/">
          <div>Quản lý người dùng</div>
        </NavLink>
      ),
      link: "/",
      key: "00",
    },
    {
      label: (
        <NavLink to="/service">
          <div>Quản lý dịch vụ</div>
        </NavLink>
      ),
      link: "/service",
      key: "10",
    },
  ];

  const [current, setCurrent] = useState("00");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Header className="header" style={{
            position: "fixed",
            width: "100%",
            zIndex: 10,
          }}>
        <div className={s.navbar}>
          <Link to="/" className={s.logo}>
            Admin Fiverr
          </Link>
          {/* {profile ? (
            <div className={s.profile}>
              <span className={s.user}>Hello, {profile?.hoTen}</span>
              <div className={s.dropdownMenu}>
                <button className={s.menuItem} onClick={handleLogout}>
                  Đăng xuất
                </button>
              </div>
            </div>
          ) :  */}
          {/* ( */}
          <div className={s.content}>
            <NavLink
              to="/login"
              className={({ isActive }) => {
                if (isActive) return `${s.authenActive} ${s.authen}`;
                return s.authen;
              }}
            >
              Đăng nhập
            </NavLink>
            <span> | </span>
            <NavLink
              to="/signup"
              className={({ isActive }) => {
                if (isActive) return `${s.authenActive} ${s.authen}`;
                return s.authen;
              }}
            >
              Đăng ký
            </NavLink>
          </div>
          {/* ) */}
        </div>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
            position: "fixed",
            minHeight: "100vh",
            marginTop: 64,
            paddingTop: 20
          }}
          className="sider"
        >
          <Menu
            onClick={(e) => handleClick(e)}
            defaultSelectedKeys={["00"]}
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={menu}
            selectedKeys={[current]}
          />
        </Sider>
        <Layout
          style={{
            padding: "64px 24px 24px",
            overflow: "auto",
            marginLeft: 200,
          }}
        >
          <Breadcrumb
            style={{
              margin: "0",
            }}
          ></Breadcrumb>
          <Content
            style={{
              padding: 16,
              minHeight: "calc(100vh - 128px)",
              background: colorBgContainer,
              marginTop: 30
            }}
          >
            <Routes>
              <Route exact path="/" element={<ManagementUser />} />
              <Route path="/service" element={<ManagementService />} />
              <Route path="/updateuser/:id" element={<UpdateUser />} />
              <Route path="/updateservice/:id" element={<UpdateService />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
