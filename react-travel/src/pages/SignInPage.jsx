import React, {useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Field } from '../components/field';
import { Label } from '../components/label';
import { InputPasswordToggle, Input } from '../components/input';
import { Button } from '../components/button';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from "yup";

const SignInPage = () => {
  const [showError, setShowError] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Bắt buộc phải nhập Email. Vui lòng thử lại").email("Email không hợp lệ").max(50, "Hệ thống hiện tại chỉ cho nhập email 50 ký tự").min(6, "Yêu cầu phải nhập lớn hơn 6 ký tự"),
      password: Yup.string().required("Bắt buộc phải nhập mật khẩu. Vui lòng thử lại").min(6, "Vui lòng nhập ít nhất 6 kí tự").max(50, "Hệ thống hiện tại chỉ cho nhập 50 ký tự").matches(/^(\S+$)/g, 'Bạn không thể nhập khoảng trắng')
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:8000/v1/auth/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("role", res.data.admin);
        localStorage.setItem("email", res.data.email);
        navigate("/");
      })
      .catch(err => {
        setShowError(err.response);
      })
    }
  });
  return (
    <div className="h-[100vh] flex items-center justify-center flex-col md:px-5">
      <div className="max-w-[700px] mx-auto text-center">
        <form onSubmit={formik.handleSubmit}>
          <NavLink to="/" className="w-full">
            <img
                src="/logo.png"
                alt=""
                className="object-cover w-full h-full block mx-auto my-0 md:h-[40px] md:w-[120px] md:object-cover"/>
          </NavLink>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="Nhập email"
              onChange={formik.handleChange}
              value = {formik.values.email}
            ></Input>
            {formik.errors.email ? (
              <p className='text-red-500'>{formik.errors.email}</p>
            ) : null}
          </Field>
          
          <Field>
            <Label htmlFor="password">Mật khẩu</Label>
            <InputPasswordToggle 
              onChange={formik.handleChange}
              value = {formik.values.password}
            ></InputPasswordToggle>
            {formik.errors.password ? (
                <p className='text-red-500'>{formik.errors.password}</p>
            ) : null}
          </Field>
          {formik.errors && (
              <span className='text-red-500'>{showError.data}</span>
          )}
          <div className="flex items-start pt-3 mb-5 gap-x-2">
            Bạn chưa có tài khoản?
            <NavLink to="/dang-ky" className="text-green-500">
              Đăng ký
            </NavLink>
          </div>
          {formik.errors.email == null && formik.errors.password == null ?
              (<Button type="submit" className="w-full" >
                Đăng nhập
              </Button>)
              :
              (<Button type="submit" className="w-full" disabled>
                Đăng nhập
              </Button>)
            }
        </form>
      </div>
    </div>
  );
};

export default SignInPage;