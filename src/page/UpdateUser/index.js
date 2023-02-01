import React from 'react';
import s from "./UpdateUser.module.scss";
import { Button, Form, Input } from "antd";

const UpdateUser = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log(values)
  };
  return (
    <div className={s.updateUser}>
      <h3>Cập nhật thông tin người dùng</h3>
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="basic"
          onFinish={onFinish}
          className={s.form}
          form={form}
        >
          <Form.Item
            label="ID"
            name="id"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
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

          <Form.Item name="birthday" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="role" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="gender" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="skill" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="certification" hidden>
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

          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button type="primary" htmlType="submit" className={s.button}>
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default UpdateUser