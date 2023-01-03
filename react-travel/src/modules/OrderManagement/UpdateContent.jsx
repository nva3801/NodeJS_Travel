import React, {useState, useEffect} from 'react';
import { useNavigate, useParams  } from "react-router-dom";
import { Field } from '../../components/field';
import { Label } from '../../components/label';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { link } from "../../config";
// import useSWR from "swr";
import { linkStorage } from './../../config';

const UpdateContent = () => {
    const { id } = useParams();
    const [showError, setShowError] = useState("");
    const navigate = useNavigate();
    const [checkout, setCheckout] = useState({});

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        await axios.get(`${link}/list/list-order/detail/${id}`).then((response) => { 
            setCheckout( response.data);
        });
    }
    const formik = useFormik({
        enableReinitialize: true,   
        initialValues: {
            name: checkout.name,
            email: checkout.email,
            phoneNumber: checkout.phoneNumber,
            number_adult: checkout.number_adult,
            number_children: checkout.number_children,
            number_baby: checkout.number_baby
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Bắt buộc phải nhập Email. Vui lòng thử lại").email("Email không hợp lệ").max(50, "Hệ thống hiện tại chỉ cho nhập max 50 ký tự").matches(/^(\S+$)/g, 'Bạn không thể nhập khoảng trắng'),
            name: Yup.string().required("Vui lòng nhập tên người đặt").min(6, "Vui lòng nhập lớn hơn 6 ký tự").max(50, "Vui lòng nhập nhỏ hơn 50 ký tự"), //.matches(/^(?=[\p{L}0-9])[\p{L}\p{N}_@,.&$%#\s-]$/, 'Bạn không thể nhập ký tự đặc biệt'),
            phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại").matches(/^[0-9]+$/, "Chỉ có thể nhập số").max(10, "Số điện thoại không hợp lệ").min(10, "Số điện thoại không hợp lệ"),
            number_adult: Yup.string().required("Phải có ít nhất 1 người lớn").matches(/^[0-9]+$/, "Chỉ có thể nhập số dương").min(1, "Phải có ít nhất 1 người lớn"),
            number_children: Yup.string().required("Vui lòng nhập số lượng trẻ em").matches(/^[0-9]+$/, "Chỉ có thể nhập số dương"),
            number_baby: Yup.string().required("Vui lòng nhập số lượng em bé").matches(/^[0-9]+$/, "Chỉ có thể nhập số dương"),
        }),
        onSubmit: (values) => {
            axios.put(`${link}/list/update-checkout/${id}`, values)
            .then(res => {
                navigate("/order-management");
            })
            .catch(err => {
                setShowError(err.response);
            })
        }
    });
    return (
        <div>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className='p-5 mt-10 bg-gray-300 rounded-lg'>
                        <div className='flex'>
                            <div className='w-4/6 mr-2'>
                                <Field>
                                    <Label htmlFor="name">Username</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Nhập username"
                                        onChange={formik.handleChange}
                                        value = {formik.values.name}
                                    ></Input>
                                    {formik.errors.name ? (
                                        <p className='text-red-500'>{formik.errors.name}</p>
                                    ) : null}
                                </Field>
                                <div className='flex justify-around mt-2'>
                                    <Field className='w-full mr-2'>
                                        <Label htmlFor="phoneNumber">Số điện thoại</Label>
                                        <Input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Nhập số điện thoại"
                                            onChange={formik.handleChange}
                                            value = {formik.values.phoneNumber}
                                        ></Input>
                                        {formik.errors.phoneNumber ? (
                                            <p className='text-red-500'>{formik.errors.phoneNumber}</p>
                                        ) : null}
                                    </Field>
                                    <Field className='w-full mr-2'>
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
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <Field className='w-full mr-2'>
                                        <Label>Số lượng người lớn</Label>
                                        <Input 
                                            type="number"
                                            name="number_adult"
                                            className="mb-3" 
                                            onChange={formik.handleChange}
                                            value={formik.values.number_adult}
                                            placeholder="Nhập số lượng người lớn">
                                        </Input>
                                        {formik.errors.number_adult ? (
                                            <p className='text-red-500'>{formik.errors.number_adult}</p>
                                        ) : null}
                                    </Field>
                                    <Field className='w-full mr-2'>
                                        <Label>Số lượng trẻ em</Label>
                                        <Input 
                                            type="number"
                                            name="number_children"
                                            className="mb-3" 
                                            onChange={formik.handleChange}
                                            value={formik.values.number_children}
                                            placeholder="Nhập số lượng trẻ em">
                                        </Input>
                                        {formik.errors.number_children ? (
                                            <p className='text-red-500'>{formik.errors.number_children}</p>
                                        ) : null}
                                    </Field>
                                    <Field className='w-full '>
                                        <Label>Số lượng em bé</Label>
                                        <Input 
                                            type="number"
                                            name="number_baby"
                                            className="mb-3" 
                                            onChange={formik.handleChange}
                                            value={formik.values.number_baby}
                                            placeholder="Nhập số lượng em bé">
                                        </Input>
                                        {formik.errors.number_baby ? (
                                            <p className='text-red-500'>{formik.errors.number_baby}</p>
                                        ) : null}
                                    </Field>
                                </div>
                            </div>
                            <div className='w-2/6'>
                                <div className='p-2 bg-white rounded-lg'>
                                    <img
                                        src={`${linkStorage}/${checkout.product_id?.image}`}
                                        alt="" />
                                    <div className='flex mt-1'>
                                        <div className='mr-1'>Mã Tour: </div>
                                        <div className='font-bold'>{checkout?.tour_code}</div>
                                    </div>
                                    <div className='flex'>
                                        <div className='mr-1'>Tên Tour: </div>
                                        <div className='font-bold'>{checkout.product_id?.title}</div>
                                    </div>
                                    <div className='flex'>
                                        <div className='mr-1'>Tổng tiền: </div>
                                        <div className='font-bold'>{checkout.total?.toLocaleString()}đ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {formik.errors && (
                        <span className='text-red-500'>{showError.data}</span>
                    )}
                    <Button type="submit" className="w-full" >
                        Sửa
                    </Button>
                </form>
            </div>
        </div>
    );
};


export default UpdateContent;