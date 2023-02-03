import React from "react";
import s from "./UpdateService.module.scss";
import { Button, Form, Input, InputNumber } from "antd";

const UpdateService = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};

  return (
    <div className={s.updateService}>
      <h3>Cập nhật công việc</h3>
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
            label="Tên công việc"
            name="tenCongViec"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên công việc!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Đánh giá" name="danhGia">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Giá tiền" name="giaTien">
            <InputNumber />
          </Form.Item>
          <Form.Item name="nguoiTao" hidden>
            <InputNumber value={0} />
          </Form.Item>

          <Form.Item
            label="Mô tả"
            name="moTa"
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="Mô tả ngắn"
            name="moTaNgan"
          >
            <Input />
          </Form.Item>
          <Form.Item label="Mã chi tiết loại công việc" name="maChiTietLoaiCongViec">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Số sao công việc" name="saoCongViec">
            <InputNumber />
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

export default UpdateService;
