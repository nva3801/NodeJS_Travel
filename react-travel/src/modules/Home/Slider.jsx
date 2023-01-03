import React from "react";

const Slider = () => {
  return (
    <section className="slider">
      <div className="relative w-full h-full">
        <img
          src="/slide.jpg"
          alt=""
          className="object-cover w-full h-full md:h-[500px]"
        />
        <div className="text-white absolute bottom-[20%] w-full">
          <div className="container">
            <span className="uppercase text-lg leading-[60px] md:text-md md:leading-none">
              mona travel - đi và trải nghiệm mọi thứ
            </span>
            <h1 className="text-[46px] leading-[55px] font-bold uppercase md:text-xl">
              đồng hành cùng bạn
              <br /> mọi nẻo đường
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
