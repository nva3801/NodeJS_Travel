import { Footer, Header } from "../components/layout";
import React, { Fragment, useEffect } from "react";
import { Intro, Checkout } from "../modules/Checkout";
import { useNavigate  } from "react-router-dom";

const CheckoutPage = () => {
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
      {/* <Progress></Progress> */}
      <Checkout></Checkout>
      <Footer></Footer>
    </Fragment>
  );
};

export default CheckoutPage;
