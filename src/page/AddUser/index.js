import React from 'react';
import s from "./AddUser.module.scss";
import { Button, Form, Input, Select } from "antd";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'services/admin';
import { v4 as uuid } from "uuid";
import { fetchUserList } from 'redux/actions/admin';

const AddUser = () => {
    const { Option } = Select;
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const id = uuid();
        const params = {
            id,
            name: values.name,
            password: values.password,
            email: values.email,
            phone: values.phone,
            birthday: values.birthday,
            gender: values.gender,
            role: "ADMIN",
            skill: values.skill,
            certification: values.certification,
        };
        let res = await addUser(params);
        console.log(res);
        if(res?.data?.statusCode === 200) {
          dispatch(fetchUserList(6, 1));
          navigate("/");
        }
      };
  return (
    <div className={s.addUser}>
      <h3>Thêm quản trị viên</h3>
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
            name="id" hidden
          >
            <Input />
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

            <Form.Item
            name="gender"
            label="Gender"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Select
            allowClear
            >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
            </Select>
        </Form.Item>

      <Form.Item
            label="Ngày sinh"
            name="birthday"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập ngày sinh!",
              },
            ]}
          >
            <Input placeholder='DD/MM/YYYY'/>
          </Form.Item>

          <Form.Item name="role" hidden>
            <Input />
          </Form.Item>

          <Form.Item label="Skills"
            name="skill">
            <Input />
          </Form.Item>
          <Form.Item name="certification" label="Certification">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button type="primary" htmlType="submit" className={s.button}>
              Thêm quản trị viên
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default AddUser