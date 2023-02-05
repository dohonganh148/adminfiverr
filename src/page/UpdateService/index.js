import React, { useEffect } from "react";
import s from "./UpdateService.module.scss";
import { Button, Form, Input, InputNumber } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getServiceDetail, updateService } from "services/admin";
import { useDispatch } from "react-redux";
import { fetchServiceList } from "redux/actions/admin";

const UpdateService = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const setInititalValue = async () => {
    let res = await getServiceDetail(params.id);
    console.log(res);
    if (res.data && res.status === 200) {
      const service = res.data.content;
      form.setFieldsValue({
        id: service.id,
        tenCongViec: service.tenCongViec,
        hinhAnh: service.hinhAnh,
        danhGia: service.danhGia,
        giaTien: service.giaTien,
        nguoiTao: service.nguoiTao,
        moTa: service.moTa,
        moTaNgan: service.moTaNgan,
        maChiTietLoaiCongViec: service.maChiTietLoaiCongViec,
        saoCongViec: service.saoCongViec,
      });
    }
  };
  useEffect(() => {
    setInititalValue();
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values)
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
    let res = await updateService(params, values.id);
    console.log(res)
    if (res.data.statusCode === 200) {
      dispatch(fetchServiceList(1, 4));
      navigate("/jobs");
    }
  };

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
          <Form.Item label="ID" name="id" hidden>
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

          <Form.Item label="Mô tả" name="moTa">
            <Input />
          </Form.Item>

          <Form.Item label="Mô tả ngắn" name="moTaNgan">
            <Input />
          </Form.Item>
          <Form.Item
            label="Mã chi tiết loại công việc"
            name="maChiTietLoaiCongViec"
          >
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
