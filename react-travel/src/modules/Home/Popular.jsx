import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import useSWR from "swr";
import { fetcher, link, linkStorage } from "../../config";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} md:hidden`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} md:hidden`} onClick={onClick} />;
}
const Popular = () => {
  const { data } = useSWR(`${link}/category-overseas`, fetcher);
  const category = data?.category || [];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="popular">
      <div className="relative my-14">
        <div className="w-full h-[600px]">
          <div className="bg-[#00000099] absolute inset-0 z-10"></div>
          <img
            src="/banner2.jpg"
            alt=""
            className="z-0 object-cover w-full h-full"
          />
        </div>
        <div className="absolute z-20 w-full text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="container">
            <p className="mb-5 text-base">Những điểm đến trên cả tuyệt vời</p>
            <h1 className="mb-5 text-3xl font-medium uppercase">
              Thiên đường hội tụ
            </h1>
            <Slider {...settings}>
              {category.map((item) => (
                <NavLink to={`/product/${item.slug}`} key={item.id}>
                  <div className="relative p-3">
                    <img
                      src={`${linkStorage}/${item.image}`}
                      alt=""
                      className="object-cover w-full h-[258px]"
                    />
                    <div className="bg-[#000000b3] absolute w-[calc(100%-24px)] bottom-16">
                      <p className="text-[#f1f1f1] uppercase">
                        {item.category}
                      </p>
                      <p className="text-[#f1f1f1] text-base uppercase h-[46px]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
