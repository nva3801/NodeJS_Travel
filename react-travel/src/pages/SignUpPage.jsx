import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Field } from '../components/field';
import { Label } from '../components/label';
import { InputPasswordToggle, Input } from '../components/input';
import { Button } from '../components/button';
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";


const SignUpPage = () => {
  const [showError, setShowError] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Bạn vui lòng nhập tên tài khoản").max(50, "Hệ thống hiện tại chỉ cho nhập 50 ký tự").min(6, "Vui lòng nhập nhiều hơn 6 kí tự").matches(/^(\S+$)/g, 'Bạn không thể nhập khoảng trắng'),
      email: Yup.string().required("Bạn vui lòng nhập Email").email("Email không hợp lệ").max(50, "Hệ thống hiện tại chỉ cho nhập 50 ký tự").matches(/^(\S+$)/g, 'Bạn không thể nhập khoảng trắng'),
      password: Yup.string().required("Bạn vui lòng nhập mật khẩu").min(6, "Vui lòng nhập nhiều hơn 6 kí tự").max(50, "Hệ thống hiện tại chỉ cho nhập 50 ký tự").matches(/^(\S+$)/g, 'Bạn không thể nhập khoảng trắng'),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:8000/v1/auth/register", values)
          .then(res => {
            navigate("/dang-nhap");
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
              <Label htmlFor="username">Username</Label>
              <Input
                  type="text"
                  name="username"
                  placeholder="Enter your Username"
                  onChange={formik.handleChange}
                  value = {formik.values.username}
              ></Input>
              {formik.errors.username ? (
                  <p className='text-red-500'>{formik.errors.username}</p>
              ) : null}
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  value = {formik.values.email}
              ></Input>
              {formik.errors.email ? (
                  <p className='text-red-500'>{formik.errors.email}</p>
              ) : null}
            </Field>
            <Field>
              <Label htmlFor="password">Password</Label>
              <InputPasswordToggle
                  onChange={formik.handleChange}
                  value = {formik.values.password}>
              </InputPasswordToggle>
              {formik.errors.password ? (
                  <p className='text-red-500'>{formik.errors.password}</p>
              ) : null}
            </Field>
            {formik.errors && (
                <span className='text-red-500'>{showError.data}</span>
            )}
            <div className="flex items-start pt-3 mb-5 gap-x-2">
              Bạn đã có tài khoản?
              <NavLink to="/dang-nhap" className="text-green-500">
                Đăng nhập
              </NavLink>
            </div>
            {formik.errors.email == null && formik.errors.password == null && formik.errors.username == null ?
                (<Button type="submit" className="w-full" >
                  Đăng ký
                </Button>)
                :
                (<Button type="submit" className="w-full" disabled>
                  Đăng ký
                </Button>)
            }
          </form>
        </div>
      </div>
    );
};

export default SignUpPage;