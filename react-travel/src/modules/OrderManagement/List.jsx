import React, { useEffect } from 'react';
import { fetcher, link } from "../../config";
import useSWR from "swr";
import Button from './../../components/button/Button';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const List = () => {
    const email = localStorage.getItem("email");
    const { data } = useSWR(`${link}/list/list-order/${email}`, fetcher);
    const product = data || [];

    const store = async (e) => {
        e.preventDefault();
        await axios.delete(`${link}/list/${e.target.id.value}`)
        .then(() => {
            window.location.reload();
            console.log(e.target.id.value)
        });
    };
    return (
        <div>
            <div className='container'>
                {product.map(item => (
                    <div className='h-full mb-5 bg-gray-300 rounded-lg'>
                        {item.status == 0 ? (<div className='pt-5 pl-5 text-lg text-red-500'>
                            {item.status == 0 ? "Đã hủy" : ""}
                        </div>) : ''}
                        <div className='flex justify-between'>
                            <div className='w-1/2 px-5 py-4 text-base'>
                                <div className='flex'>
                                    <span className='pr-1'>Tour_Code: </span>
                                    <span className='font-bold'>{item.tour_code}</span>
                                </div>
                                <div className='flex'>
                                    <span className='pr-1'>Tên Tour: </span>
                                    <span className='font-bold'>{item.product_id?.title}</span>
                                </div>
                                <div className='flex'>
                                    <span className='pr-1'>Số Người Lớn: </span>
                                    <span className='font-bold'>{item.number_adult}</span>
                                </div>
                                <div className='flex'>
                                    <span className='pr-1'>Số trẻ em: </span>
                                    {item.number_baby == null ? (
                                        <span className='font-bold'>0</span>
                                    ) : (
                                        <span className='font-bold'>{item.number_children}</span>
                                    )}
                                </div>
                                <div className='flex'>
                                    <span className='pr-1'>Số em bé: </span>
                                    {item.number_baby == null ? (
                                        <span className='font-bold'>0</span>
                                    ) : (
                                        <span className='font-bold'>{item.number_baby}</span>
                                    )}
                                </div>
                                <div className='flex'>
                                    <span className='pr-1'>Phương thức thanh toán: </span>
                                    {item.payment_methods == 1 ? (
                                        <span className='font-bold'>Thanh toán 100%</span>
                                    ) : (
                                        <span className='font-bold'>Thanh toán 50%</span>
                                    )}
                                </div>
                                <div className='flex'>
                                    <span className='pr-1'>Tổng tiền: </span>
                                    <span className='font-bold'>{item.total.toLocaleString()}đ</span>
                                </div>
                            </div>
                            <div className='float-left w-1/4 px-5 py-4 text-base'>
                                <div className='flex'>
                                    <span className='pr-1'>Tên Người Đặt: </span>
                                    <span className='font-bold'>{item.name}</span>
                                </div>
                                <div className='flex'>
                                    <span className='pr-1'>Số điện thoại: </span>
                                    <span className='font-bold'>{item.phoneNumber}</span>
                                </div>
                                <div className='flex'>
                                    <span className='pr-1'>Email: </span>
                                    <span className='font-bold'>{item.email}</span>
                                </div>
                            </div>
                        <div className='float-left w-1/4 px-5 py-4 my-auto text-base'>
                            <div className='flex my-auto align-center'>
                                <NavLink to={`/update-order/${item._id}`} className='w-16 pt-3 mr-2 font-bold text-center text-white bg-green-500 rounded-lg align-center' >Sửa</NavLink>
                                <form onSubmit={store}>
                                    <input type="hidden" name="status" value="0"></input>
                                    <input type="hidden" name="id" value={item._id}></input>
                                    {item.status == 0 ? (
                                        <Button className='bg-red-500' type='submit' disabled>Hủy đặt tour</Button>
                                    ) : (
                                        <Button className='bg-red-500' type='submit'>Hủy đặt tour</Button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default List;