import React, { Fragment, useEffect } from 'react';
import { Footer, Header } from '../components/layout';
import { Intro } from "../modules/OrderManagement"
import UpdateContent from './../modules/OrderManagement/UpdateContent';
import { useNavigate } from "react-router-dom";


const UpdateOrder = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if(token == null) {
            navigate("/dang-nhap")
        }
    }, [])
    return (
        <Fragment>
            <Header></Header>
            <Intro></Intro>
            <UpdateContent></UpdateContent>
            <Footer></Footer>
        </Fragment>
    );
};

export default UpdateOrder;