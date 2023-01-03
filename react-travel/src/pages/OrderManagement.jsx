import React, { Fragment, useEffect } from 'react';
import { Footer, Header } from '../components/layout';
import { Intro, List } from "../modules/OrderManagement"
import { useNavigate  } from "react-router-dom";

const OrderManagement = () => {
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
            <List></List>
            <Footer></Footer>
        </Fragment>
    );
};

export default OrderManagement;