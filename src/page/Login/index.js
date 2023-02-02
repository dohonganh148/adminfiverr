import React from 'react';
import s from "./Login.module.scss";
import { Button, Form, Input } from "antd";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {loginAction} from "redux/actions/authen"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try{
      await dispatch(loginAction(values));
      navigate("/");
    } catch(err) {
      console.log(err);
    }
  };
  return (
    <div className={s.content}>
      <h2>Đăng nhập</h2>
      <Form name="basic" onFinish={handleLogin} className={s.form}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập email!",
            },
          ]}
        >
          <Input placeholder='Email'/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password placeholder='Password'/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
          }}
        >
          <Button type="primary" htmlType="submit" className={s.button}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login