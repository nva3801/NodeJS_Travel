import React from "react";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2019/01/25656857141_edcdf5e6e3_o.jpg",
    name: "Italy",
  },
  {
    id: 2,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2019/01/washington_dc.jpg",
    name: "USA",
  },
  {
    id: 3,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2019/01/thumb-cuba.jpg",
    name: "CUBA",
  },
  {
    id: 4,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2019/01/photo-1474181487882-5abf3f0ba6c2.jpg",
    name: "PHILIPPINES",
  },
  {
    id: 5,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2019/01/25816508131_00e16429b8_o.jpg",
    name: "CANADA",
  },
  {
    id: 6,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2019/01/26003147786_a04226cd2f_o.jpg",
    name: "BRAZIL",
  },
];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} md:hidden`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} md:hidden`} onClick={onClick} />;
}

const Library = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="library">
      <div className="relative my-14">
        <div className="container">
          <div className="text-center">
            <p className="mb-5 text-base">Những điểm đến trên cả tuyệt vời</p>
            <h1 className="mb-5 text-3xl font-medium uppercase">
              Thiên đường hội tụ
            </h1>
            <Slider {...settings}>
              {data.map((item) => (
                <div className="relative p-2" key={item.id}>
                  <img src={item.image} alt="" className="rounded-full" />
                  <div className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;
