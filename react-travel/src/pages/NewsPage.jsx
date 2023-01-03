import React, { Fragment } from "react";
import { Footer, Header } from "../components/layout";
import { Content, Intro } from "../modules/News";

const NewsPage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Intro></Intro>
      <Content></Content>
      <Footer></Footer>
    </Fragment>
  );
};

export default NewsPage;
