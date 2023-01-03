import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, link, linkStorage } from "../../config";

const List = () => {
  const { slug } = useParams();
  const { data } = useSWR(`${link}/list/category/${slug}`, fetcher);
    const product = data || [];

    return (
    <section className="list">
      <div className="container">
        {product.map((item) => (
          <div key={item.id}>
            {item.product.map(item1 => (
              <NavLink
                key={item1.id}
                to={`/product/${item1.slug}`}
                className="flex pb-4 mb-4 border-b-2 border-b-slate-300 md:inline-block md:w-full"
              >
                <div className="relative w-1/3 overflow-hidden md:w-full">
                  <img
                    src={`${linkStorage}/${item1.image}`}
                    alt=""
                    className="w-full duration-300 ease-in cursor-pointer hover:scale-125"
                  />
                  {/* <div className="absolute bottom-0 left-0 px-3 py-1 text-base font-medium text-white bg-secondary">
                    Giá trọn gói 3.990.000 vnđ/khách
                  </div> */}
                </div>
                <div className="flex w-2/3 px-5 md:w-full md:inline-block md:px-3">
                  <div className="flex flex-col w-2/3 gap-2 md:w-full">
                    <h2 className="text-xl font-medium uppercase cursor-pointer text-text">
                      {item1.title}
                    </h2>
                    <p className="text-base font-medium">HÀ NỘI - ĐÔNG BẮC</p>
                    <div className="flex flex-col gap-1">
                      <p>Thời gian : {item1.time}</p>
                      <p>Phương tiện : {item1.vehicle}</p>
                      <p
                        className="truncate"
                        dangerouslySetInnerHTML={{
                          __html: item1.description,
                        }}
                      ></p>
                    </div>
                  </div>
                  <div className="w-1/3 text-center md:w-full md:text-left md:mt-5">
                    <button className="px-6 py-3 text-lg text-white rounded-lg bg-primary">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
