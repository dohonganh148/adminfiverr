import React from 'react';
import s from "./AddService.module.scss";
import { Button, Form, Input, InputNumber } from "antd";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addService } from 'services/admin';
import { fetchServiceList } from 'redux/actions/admin';

const AddService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const params = {
        tenCongViec: values.tenCongViec,
        hinhAnh: values.hinhAnh,
        danhGia: values.danhGia,
        giaTien: values.giaTien,
        nguoiTao: values.nguoiTao,
        moTa: values.moTa,
        moTaNgan: values.moTaNgan,
        maChiTietLoaiCongViec: values.maChiTietLoaiCongViec,
        saoCongViec: values.saoCongViec,
    };
    let res = await addService(params);
    console.log(res);
    if(res?.data?.content) {
      dispatch(fetchServiceList(4,1));
      navigate("/jobs")
    }
  };

  return (
    <div className={s.addService}>
      <h3>Thêm công việc</h3>
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
          >
            <Input />
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

          <Form.Item
            label="Hình ảnh"
            name="hinhAnh"
          >
            <Input placeholder='Nhập link ảnh'/>
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
              Thêm công việc
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddService