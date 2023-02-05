import React, { useEffect } from "react";
import s from "./UpdateUser.module.scss";
import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getUpdateUser, updateUser } from "services/admin";
import { useDispatch } from "react-redux";
import { fetchUserList } from "redux/actions/admin";

const UpdateUser = () => {
  const params = useParams();
  const [form] = Form.useForm();
  const setInititalValue = async () => {
    let res = await getUpdateUser(params.id);
    if (res.data && res.status === 200) {
      const user = res.data.content;
      form.setFieldsValue({
        id: user.id,
        name: user.name,
        password: user.password,
        email: user.email,
        phone: user.phone,
        birthday: user.birthday,
        gender: user.gender,
        role: user.role,
        skill: user.skill,
        certification: user.certification,
      });
    }
  };
  useEffect(() => {
    setInititalValue();
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const params = {
      name: values.name,
      password: values.password,
      email: values.email,
      phone: values.phone,
      birthday: values.birthday,
      gender: values.gender,
      role: values.role,
      skill: values.skill,
      certification: values.certification,
    };
    let res = await updateUser(params, values.id);
    if (res.data.statusCode === 200) {
      dispatch(fetchUserList(1, 6));
      navigate("/");
    }
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
            hidden
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
  );
};

export default UpdateUser;
