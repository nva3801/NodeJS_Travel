import React, { Fragment } from "react";
import { Footer, Header } from "../components/layout";
import Content from "../modules/Product/Content";
import Intro from "../modules/Product/Intro";
const ProductPage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Intro></Intro>
      <Content></Content>
      <Footer></Footer>
    </Fragment>
  );
};

export default ProductPage;
