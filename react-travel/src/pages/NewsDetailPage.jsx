import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Footer, Header } from "../components/layout";
import { fetcher, link, linkStorage } from "../config";
import moment from "moment";

const NewsDetailPage = () => {
  const { slug } = useParams();
  const { data } = useSWR(`${link}/news-detail/${slug}`, fetcher);
  const news = data?.news || [];
  return (
    <Fragment>
      <Header></Header>
      {news.map((item) => (
        <div key={item.id}>
          <section className="intro">
            <div className="mb-5 ">
              <img
                src={`${linkStorage}/${item.image}`}
                alt=""
                className="object-cover w-full h-[500px]"
              />
            </div>
          </section>
          <section className="pt-3 content">
            <div className="container">
              <h1 className="mb-3 text-3xl font-medium">{item.title}</h1>
              <span
                className="mb-3 text-base"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></span>
              <div className="flex gap-2 my-3">
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
              <span
                className="mb-3 text-base"
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              ></span>
            </div>
          </section>
        </div>
      ))}

      <Footer></Footer>
    </Fragment>
  );
};

export default NewsDetailPage;
