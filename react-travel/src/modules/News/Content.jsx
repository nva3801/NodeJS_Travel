import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import { fetcher, link, linkStorage } from "../../config";

const Content = () => {
  const { data } = useSWR(`${link}/news`, fetcher);
  const news = data?.news || [];
  return (
    <div>
      <div className="container">
        <h1 className="mb-5 text-3xl font-medium capitalize">
          Non nước việt nam
        </h1>
        {news.map((item) => (
          <div
            className="flex w-full gap-5 pb-5 border-b-2 border-grey"
            key={item.id}
          >
            <div className="w-1/3">
              <img
                src={`${linkStorage}/${item.image}`}
                alt=""
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-2/3 gap-2">
              <NavLink to={`/tin-tuc/${item.slug}`}>
                <h1 className="hover:text-[#0aa0fe] text-lg cursor-pointer font-medium">
                  {item.title}
                </h1>
              </NavLink>
              <span
                className="text-base"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></span>
              <div className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <div className="text-[#0aa0fe] font-medium text-base">
                  {moment(item.created_at).format("DD/MM/YYYY H:m")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
