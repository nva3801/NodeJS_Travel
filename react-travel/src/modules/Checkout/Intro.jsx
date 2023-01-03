import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="relative mb-5 ">
        <img
          src="https://saigontourist.net/assets/img/pages/page-title-bg7.jpg"
          alt=""
          className="object-cover w-full h-full md:h-[500px]"
        />
        <div className="absolute w-full -translate-x-1/2 bottom-1/3 left-1/2 md:mb-5">
          <div className="container">
            <div className="text-3xl font-bold text-center text-white">
              ĐẶT TOUR
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
