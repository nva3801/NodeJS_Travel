import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, link, linkStorage } from "../../config";

const Intro = () => {
  const { slug } = useParams();
  const { data } = useSWR(`${link}/product/${slug}`, fetcher);
  const product = data || [];
  return (
    <section className="intro">
      {product.map((item) => (
        <div className="relative mb-5 h-[500px]" key={item.id}>
          <img
            src={`${linkStorage}/${item.image}`}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 w-full -translate-x-1/2 left-1/2 md:mb-5">
            <div className="container">
              <div className="bg-[#00000080] py-4 px-6 rounded-t-lg md:rounded-b-lg">
                <h1 className="my-4 text-4xl font-bold text-white uppercase md:text-lg">
                  <div>{item.title}</div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Intro;
