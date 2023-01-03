import React, { Fragment } from "react";
import { Footer, Header } from "../components/layout";
import { Intro, List } from "../modules/Category";

const CategoryPage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Intro></Intro>
      <List></List>
      <Footer></Footer>
    </Fragment>
  );
};

export default CategoryPage;
