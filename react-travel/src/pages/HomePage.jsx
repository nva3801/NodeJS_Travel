import React, { Fragment } from "react";
import { Footer, Header } from "../components/layout";
import {
  Content,
  Countdown,
  Library,
  Popular,
  Reason,
  Sale,
  Slider,
  Success,
} from "../modules/Home";

const HomePage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Slider></Slider>
      <Library></Library>
      <Popular></Popular>
      <Reason></Reason>
      <Success></Success>
      <Sale></Sale>
      <Countdown></Countdown>
      <Content></Content>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
