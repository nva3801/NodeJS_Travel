import React, { useState } from "react";
import { Label } from "../../components/label";
import { Field } from "../../components/field";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, link, linkStorage } from "../../config";
import axios from "axios";
import moment from "moment";
import { useFormik } from 'formik';
import * as Yup from "yup";

const Checkout = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState("");
  const { tour_code } = useParams();
  const { data } = useSWR(`${link}/list/checkout/${tour_code}`, fetcher);
  const checkout = data || [];
  
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phoneNumber: "",
      number_adult: 1,
      number_children: 0,
      number_baby: 0,
      payment_methods: 1,
      total: "",
      tour_code: tour_code,
      product_id: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Vui lòng nhập Email. Vui lòng thử lại").email("Email không hợp lệ").max(100, "Email quá dài vui lòng nhập lại").matches(/^(\S+$)/g, 'Bạn không thể nhập khoảng trắng'),
      name: Yup.string().required("Vui lòng nhập tên người đặt").max(50, "Hệ thống chỉ cho nhập nhiều nhất 50 ký tự").min(6, "Vui lòng nhập ít nhất 6 ký tự"),
      phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại").matches(/^[0-9]+$/, "Chỉ có thể nhập số").max(10, "Số điện thoại không hợp lệ").min(10, "Số điện thoại không hợp lệ"),
      number_adult: Yup.string().required("Phải có ít nhất 1 người lớn").matches(/^[0-9]+$/, "Chỉ có thể nhập số").min(1, "Phải có ít nhất 1 người lớn"),
      number_children: Yup.string().required("Vui lòng nhập số lượng trẻ em").matches(/^[0-9]+$/, "Chỉ có thể nhập số dương"),
      number_baby: Yup.string().required("Vui lòng nhập số lượng em bé").matches(/^[0-9]+$/, "Chỉ có thể nhập số dương"),

    }),
    onSubmit: (values) => {
      axios.post(`${link}/list/checkout-store`, values)
      .then(res => navigate("/checkout-done"))
      .catch(err => {
        setShowError(err.response);
      })
    }
  });
  const payment_methods = formik.values.payment_methods;
  return (
    <section className="mt-10 checkout">
      <div className="container">
        <form className="flex w-full md:flex-col" onSubmit={formik.handleSubmit}>
          <div className="w-2/3 mx-3 md:w-[95%]">
            <h1 className="text-2xl font-semibold uppercase">
              Số lượng hành khách
            </h1>
            <div className="my-3">
              <Field className="gap-3 mb-5">
                <Label className="font-normal" htmlFor="adult">
                  Người lớn (*)
                </Label>
                <div className="flex w-full md:flex-col">
                  <input
                    type="number"
                    className="w-5/12 px-4 py-3 border rounded-lg bg-grayLight md:w-full"
                    id="adult"
                    onChange={formik.handleChange}
                    value = {formik.values.number_adult}
                    name="number_adult"
                    min={1}
                  />
                  <div className="w-7/12 md:w-full"></div>
                </div>
                {formik.errors.number_adult ? (
                  <p className='text-red-500'>{formik.errors.number_adult}</p>
                ) : null}
              </Field>
              <Field className="gap-3 mb-5 ">
                <Label className="font-normal" htmlFor="children">
                  Trẻ em
                </Label>
                <div className="flex w-full gap-4 md:flex-col">
                  <input
                    type="number"
                    className="w-5/12 px-4 py-3 border rounded-lg bg-grayLight md:w-full"
                    id="children"
                    onChange={formik.handleChange}
                    value = {formik.values.number_children}
                    name="number_children"
                  />
                  <div className="w-7/12 italic md:w-full">
                    <ul>
                      <li>Tour nước ngoài: áp dụng từ 2 đến dưới 12 tuổi</li>
                      <li>
                        Tour trong nước và tour Campuchia: áp dụng từ 6 đến 11
                        tuổi
                      </li>
                    </ul>
                  </div>
                </div>
                {formik.errors.number_children && formik.errors.number_children ? (
                  <p className='text-red-500'>{formik.errors.number_children}</p>
                ) : null}
              </Field>
              <Field className="gap-3 mb-5">
                <Label className="font-normal" htmlFor="baby">
                  Em bé
                </Label>
                <div className="flex w-full gap-4 md:flex-col">
                  <input
                    type="number"
                    className="w-5/12 px-4 py-3 border rounded-lg bg-grayLight md:w-full"
                    id="baby"
                    onChange={formik.handleChange}
                    value = {formik.values.number_baby}
                    name="number_baby"
                  />
                  <div className="w-7/12 italic md:w-full">
                    <ul>
                      <li>Tour nước ngoài: áp dụng từ Dưới 2 tuổi</li>
                      <li>
                        Tour trong nước và tour Campuchia: áp dụng từ 2 đến 5
                        tuổi
                      </li>
                    </ul>
                  </div>
                </div>
                {formik.errors.number_baby && formik.errors.number_baby ? (
                  <p className='text-red-500'>{formik.errors.number_baby}</p>
                ) : null}
              </Field>
            </div>
            <h1 className="pt-5 text-2xl font-semibold uppercase">
              Phương thức thanh toán
            </h1>
            <div className="flex gap-3 mt-4 md:flex-col">
              <input
                type="radio"
                value= "1"
                name="payment_methods"
                id="full"
                className="hidden"
                onChange={formik.handleChange}
                defaultChecked={formik.values.payment_methods=== "1"}
              />
              <label
                className={
                  payment_methods == 1 ? "radio_active" : "radio_hidden"
                }
                htmlFor="full"
              >
                Thanh toán 100%
                <span className="absolute right-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </label>
              <input
                type="radio"
                value="0"
                name="payment_methods"
                id="half"
                className="hidden"
                onChange={formik.handleChange}
                defaultChecked={formik.values.payment_methods=== "0"}
              />
              <label
                className={
                  payment_methods == 0 ? "radio_active" : "radio_hidden"
                }
                htmlFor="half"
              >
                Thanh toán 50%
                <span className="absolute right-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </label>
              <span className="">
                Sau khi đặt cọc, quý khách vui lòng hoàn tất thanh toán trong
                48h
              </span>
            </div>
            <div className="mt-5">
              <h1 className="py-5 text-2xl font-semibold uppercase">
                Nhập thông tin người đặt
              </h1>
              <Field className="w-full gap-3 mb-5">
                <Label className="font-normal" htmlFor="name">
                  Họ Tên Người Đặt (*)
                </Label>
                <div className="flex w-full">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg bg-grayLight"
                    id="name"
                    name="name"
                    placeholder="Nhập Họ Tên Người Đặt"
                    onChange={formik.handleChange}
                    value = {formik.values.name}
                  />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <p className='text-red-500'>{formik.errors.name}</p>
                ) : null}
              </Field>
              <div className="flex w-full grid-cols-2 gap-5">
                <Field className="w-full gap-3 mb-5">
                  <Label className="font-normal" htmlFor="phoneNumber">
                    Số Điện Thoại (*)
                  </Label>
                  <div className="flex w-full">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg bg-grayLight"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Nhập Số Điện Thoại"
                      onChange={formik.handleChange}
                      value = {formik.values.phoneNumber}
                    />
                  </div>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <p className='text-red-500'>{formik.errors.phoneNumber}</p>
                  ) : null}
                </Field>
                <Field className="w-full gap-3 mb-5">
                  <Label className="font-normal" htmlFor="email">
                    Email (*)
                  </Label>
                  <div className="flex w-full">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg bg-grayLight"
                      id="email"
                      name="email"
                      placeholder="Nhập email"
                      onChange={formik.handleChange}
                      value = {formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <p className='text-red-500'>{formik.errors.email}</p>
                  ) : null}
                </Field>
              </div>
            </div>
            <button className="float-right px-5 py-2 mr-5 border rounded-lg border-primary hover:bg-slate-200 md:hidden">
              Tiếp tục
            </button>
          </div>
          <div className="w-1/3 mx-3 md:w-[95%]">
            <div className="w-full py-3 text-lg text-center text-white rounded-lg bg-primary hover:opacity-80 hover:text-[#23527c] duration-300 ease-in mb-5">
              <a href="">
                Hỗ trợ giao dịch <span className="font-bold">1900 1808</span>
              </a>
            </div>
              {checkout.map((item) => (
              <div className="border rounded-lg" key={item._id}>
                <img
                  src={`${linkStorage}/${item.product_id.image}`}
                  alt=""
                  className="rounded-t-lg"
                />
                <div className="flex flex-col gap-2 px-3 my-5">
                  <h4 className="text-[#23527c] text-lg">
                    {item.product_id.title}
                  </h4>
                  <div className="flex items-center gap-1 text-base">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <span>Mã Tour:</span>
                    <span className="font-semibold">{item.tour_code}</span>
                  </div>
                  <div className="flex items-center gap-1 text-base">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <span>Ngày đi:</span>
                    <span className="font-semibold">
                      {moment(item.start).format("DD/MM/YYYY")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-base">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <span>Thời gian:</span>
                    <span className="font-semibold">{item.product_id.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-base">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span>Giá Người lớn:</span>
                    <span className="font-semibold">
                      {item.price_adult.toLocaleString()}đ x {formik.values.number_adult}
                    </span>
                  </div>
                  {formik.values.number_children > 0 ? (
                    <div className="flex items-center gap-1 text-base">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <span>Giá Trẻ Em:</span>
                      <span className="font-semibold">
                        {item.price_children.toLocaleString()}đ x{" "}
                        {formik.values.number_children}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  {formik.values.number_baby > 0 ? (
                    <div className="flex items-center gap-1 text-base">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <span>Giá Em Bé:</span>
                      <span className="font-semibold">
                        {item.price_baby.toLocaleString()}đ x {formik.values.number_baby}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex items-center gap-2 px-3 mb-5 text-lg">
                  Tổng Tiền:
                  <span className="text-3xl font-bold text-primary">
                    {(
                      item.price_adult * formik.values.number_adult +
                      item.price_children * formik.values.number_children +
                      item.price_baby * formik.values.number_baby
                    ).toLocaleString()}
                    <input
                      type="hidden"
                      name="total"
                      value={ formik.values.total = 
                        item.price_adult * formik.values.number_adult +
                        item.price_children * formik.values.number_children +
                        item.price_baby * formik.values.number_baby
                      }
                    />
                    <input type="hidden" name="product_id" value={formik.values.product_id = item.product_id._id}/>
                  </span>
                  <span className="text-lg">đ</span>
                </div>
                {payment_methods == 0 ? (
                  <div className="flex flex-col gap-1 px-3 border-t-2 border-black">
                    <h1 className="mt-3 text-3xl font-semibold">Thanh toán</h1>
                    <h2 className="flex items-center gap-2 text-base">
                      Bạn đã chọn hình thức:
                      <span className="text-lg font-bold">Đặt cọc 50%</span>
                    </h2>
                    <div className="flex items-center gap-2 mb-5 text-base">
                      Ban cần thanh toán:
                      <span className="text-3xl font-bold text-primary">
                        {(
                          (item.price_adult * formik.values.number_adult +
                            item.price_children * formik.values.number_children +
                            item.price_baby * formik.values.number_baby) /
                          2
                        ).toLocaleString()}
                      </span>
                      <span className="text-lg">đ</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
            <div className="text-red-500">{showError}</div>
            <button className="hidden float-right px-5 py-2 mr-5 border rounded-lg border-primary hover:bg-slate-200 md:mt-5 md:block" type="button">
              Tiếp tục
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
