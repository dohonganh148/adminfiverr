import React from 'react';
import s from "./Signup.module.scss";
import { Button, Form, Input } from "antd";
import { signUp } from 'services/authen';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = async (values) => {
    try{
      let res = await signUp(values);
      if (res.data.statusCode === 200) {
        navigate("/login");
      }
    } catch(err) {
      console.log(err)
    }
  };
  return (
    <div className={s.content}>
      <h2>Đăng ký</h2>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        name="basic"
        onFinish={handleSignup}
        className={s.form}
      >
        <Form.Item
          label="Tài khoản"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Email!",
            },
            {
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email không hợp lệ!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: "Mật khẩu có ít nhất 6 ký tự, ít nhất 1 chữ và 1 số!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Số điện thoại!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item name="birthday" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="gender" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="role" hidden>
            <Input value="USER"/>
          </Form.Item>
          <Form.Item name="skill" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="certification" hidden>
            <Input />
          </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit" className={s.button}>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Signup