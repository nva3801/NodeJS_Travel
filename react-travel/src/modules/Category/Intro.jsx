import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, link, linkStorage } from "../../config";

const Intro = () => {
  const { slug } = useParams();
  const { data } = useSWR(`${link}/category-item/${slug}`, fetcher);
  const category = data || [];

  return (
    <section className="intro">
      <div className="relative mb-10 md:h-[350px]">
        <img
          src={`${linkStorage}/${category.image}`}
          alt=""
          className="object-cover w-full h-[800px] md:h-full"
        />
        <div className="absolute bottom-0 w-full -translate-x-1/2 left-1/2 md:mb-5 ">
          <div className="container">
            <div className="bg-[#00000080] py-4 px-6 rounded-t-lg md:rounded-b-lg">
              <h1 className="my-4 text-4xl font-bold text-white uppercase md:text-base">
                {category.title}
              </h1>
              <p className="text-base text-white md:text-sm md:truncate ">
                <span
                  dangerouslySetInnerHTML={{
                    __html: category.description,
                  }}
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
