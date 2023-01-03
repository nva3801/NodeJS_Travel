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
const Sale = () => {
  const { data } = useSWR(`${link}/category-local`, fetcher);
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
    <section className="sale">
      <div className="relative my-14">
        <div className="container">
          <div className="text-center">
            <p className="mb-5 text-base">Chọn ngay cho bạn tour phù hợp</p>
            <h1 className="mb-5 text-3xl font-medium uppercase">
              TOUR NỘI ĐỊA
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
                    <div className="my-5">
                      <p className="uppercase ">{item.category}</p>
                      <p className=" text-base uppercase h-[46px]">
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

export default Sale;
