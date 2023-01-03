import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, link, linkStorage } from "../../config";
import moment from "moment";

const Content = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { slug } = useParams();
  const { data } = useSWR(`${link}/product/${slug}`, fetcher);
  const product = data || [];
  return (
    <section className="content">
      <div className="container">
        {product.map((item) => (
          <div key={item.slug}>
            <div className="flex md:inline-block">
              <div className="w-3/4 md:w-full">
                <div className="flex flex-wrap md:inline-block">
                  <div className="flex w-1/2 pb-1 text-base gap-x-1 md:w-full">
                    <span className="uppercase">thời gian:</span>
                    <span className="font-bold">{item.time}</span>
                  </div>
                  <div className="flex w-1/2 pb-1 text-base gap-x-1 md:w-full">
                    <span className="uppercase">PHƯƠNG TIỆN:</span>
                    <span className="font-bold">{item.vehicle}</span>
                  </div>
                  <div className="flex w-1/2 pb-1 text-base gap-x-1 md:w-full">
                    <span className="uppercase">ĐIỂM XUẤT PHÁT:</span>
                    <span className="font-bold">{item.starting_point}</span>
                  </div>
                  <div className="flex w-1/2 pb-1 text-base gap-x-1 md:w-full">
                    <span className="uppercase">ĐIỂM ĐẾN:</span>
                    <span className="font-bold">{item.destination}</span>
                  </div>
                </div>
                {item.tourCode.length > 0 ? (
                  <div className="bg-[#ffeddf] p-3 text-base md:rounded-lg">
                    <div className="flex justify-between w-full border-b-2 border-black md:hidden">
                      <div className="w-1/6">Ngày Đi</div>
                      <div className="w-1/6">Mã Tour</div>
                      <div className="w-1/6">Giá Người Lớn</div>
                      <div className="w-1/6">Giá Trẻ Em</div>
                      <div className="w-1/6">Giá Em Bé</div>
                      <div className="w-1/6"></div>
                    </div>
                    {item.tourCode.map((item2) => (
                      <div className="md:mb-5" key={item2.id}>
                        <div className="flex items-center justify-between w-full my-2 font-bold md:flex-col md:items-start md:gap-3">
                          <div className="flex w-1/6 gap-3 md:w-full">
                            <div className="hidden md:block md:w-1/2">
                              Ngày đi:
                            </div>
                            <div className="md:w-1/2">
                              {moment(item2.start).format("DD/MM/YYYY")}
                            </div>
                          </div>
                          <div className="flex w-1/6 gap-3 md:w-full">
                            <div className="hidden md:block md:w-1/2">
                              Mã Tour:
                            </div>
                            <div className="md:w-1/2">{item2.tour_code}</div>
                          </div>
                          <div className="flex w-1/6 gap-3 md:w-full">
                            <div className="hidden md:block md:w-1/2">
                              Giá Người Lớn:
                            </div>
                            <div className="text-primary md:w-1/2">
                              {item2.price_adult.toLocaleString()}đ
                            </div>
                          </div>
                          <div className="flex w-1/6 gap-3 md:w-full">
                            <div className="hidden md:block md:w-1/2">
                              Giá Trẻ Em:
                            </div>
                            <div className="text-primary md:w-1/2">
                              {item2.price_children.toLocaleString()}đ
                            </div>
                          </div>
                          <div className="flex w-1/6 gap-3 md:w-full">
                            <div className="hidden md:block md:w-1/2">
                              Giá Em Bé:
                            </div>
                            <div className="text-primary md:w-1/2">
                              {item2.price_baby.toLocaleString()}đ
                            </div>
                          </div>
                          <div className="w-1/6 px-2 py-1 text-center text-white bg-blue-500 rounded-lg md:w-full md:mt-3">
                            <NavLink to={`/checkout/${item2.tour_code}`}>
                              Đặt chỗ
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}

                <div className="flex flex-col gap-2 mt-2">
                  <div className="text-base font-bold">Tour này có gì hay</div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  ></div>
                  <a
                    href=" #"
                    className="flex items-center px-4 py-2 text-white rounded-lg bg-primary w-fit gap-x-2"
                  >
                    <div>In chương trình tour</div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                {item.productImage.map((item1) => (
                  <div className="flex flex-wrap mt-4" key={item1.id}>
                    <div className="w-1/3 p-2 md:w-full">
                      <img
                        src={`${linkStorage}/${item1.image}`}
                        alt=""
                        className="duration-300 ease-in cursor-pointer hover:scale-[1.1]"
                      />
                    </div>
                    <div className="w-1/3 p-2 md:w-full">
                      <img
                        src={`${linkStorage}/${item1.image2}`}
                        alt=""
                        className="duration-300 ease-in cursor-pointer hover:scale-[1.1]"
                      />
                    </div>
                    <div className="w-1/3 p-2 md:w-full">
                      <img
                        src={`${linkStorage}/${item1.image3}`}
                        alt=""
                        className="duration-300 ease-in cursor-pointer hover:scale-[1.1]"
                      />
                    </div>
                    <div className="w-1/3 p-2 md:w-full">
                      <img
                        src={`${linkStorage}/${item1.image4}`}
                        alt=""
                        className="duration-300 ease-in cursor-pointer hover:scale-[1.1]"
                      />
                    </div>
                    <div className="w-1/3 p-2 md:w-full">
                      <img
                        src={`${linkStorage}/${item1.image5}`}
                        alt=""
                        className="duration-300 ease-in cursor-pointer hover:scale-[1.1]"
                      />
                    </div>
                  </div>
                ))}
                <div className="flex mt-6 text-base border-b border-b-black md:inline-block md:border-none md:w-full">
                  <div
                    className={
                      toggleState === 1
                        ? "px-5 py-2 tabs-active"
                        : "px-5 py-2 tabs"
                    }
                    onClick={() => toggleTab(1)}
                  >
                    Chương trình tour
                  </div>
                  <div
                    className={
                      toggleState === 2
                        ? "px-5 py-2 tabs-active"
                        : "px-5 py-2 tabs"
                    }
                    onClick={() => toggleTab(2)}
                  >
                    Chính sách tour
                  </div>
                  <div
                    className={
                      toggleState === 3
                        ? "px-5 py-2 tabs-active"
                        : "px-5 py-2 tabs"
                    }
                    onClick={() => toggleTab(3)}
                  >
                    Câu hỏi thường gặp
                  </div>
                </div>
                <div className="mt-4 content-tabs">
                  <div
                    className={
                      toggleState === 1
                        ? "content-item content-active"
                        : "content-item"
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.tour,
                      }}
                    ></div>
                  </div>
                  <div
                    className={
                      toggleState === 2
                        ? "content-item content-active"
                        : "content-item"
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.tour_policy,
                      }}
                    ></div>
                  </div>
                  <div
                    className={
                      toggleState === 3
                        ? "content-item content-active"
                        : "content-item"
                    }
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus temporibus sunt facere magnam aut praesentium
                    quas aliquid est beatae dicta, maxime sapiente laboriosam!
                    Tempore quas magnam velit vel adipisci nostrum! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Delectus, minus
                    corporis! Tempore, eaque! Vel incidunt necessitatibus nemo
                    mollitia animi quidem cum impedit magnam in explicabo sunt,
                    tempore aperiam ab dolorem!
                  </div>
                </div>
              </div>
              <div className="w-1/4 md:w-full md:mt-4">
                <div className="m-3 border md:m-0 md:mt-4">
                  <div className="p-4">
                    <h4 className="text-base font-bold text-primary">
                      Hỗ trợ khách hàng
                    </h4>
                    <a href=" #" className="flex items-center p-2 gap-x-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </span>
                      <span>096.609.3801</span>
                    </a>
                    <a href=" #" className="flex items-center p-2 gap-x-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <span>nva030801@gmail.com</span>
                    </a>
                    <a
                      href=" #"
                      className="flex items-center w-full px-3 py-2 text-center text-white rounded-lg gap-x-1 bg-primary"
                    >
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
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </span>
                      <span>Bạn có muốn được gọi lại?</span>
                    </a>
                  </div>
                </div>
                <div className="m-3 border md:m-0 md:mt-4">
                  <div className="p-4">
                    <h4 className="text-base font-bold text-primary">
                      Vì sao nên mua tour online?
                    </h4>
                    <div className="flex flex-col gap-3 pl-3 mt-2">
                      <a href=" #">An toàn và bảo mật</a>
                      <a href=" #">Tiện lợi, tiết kiệm thời gian</a>
                      <a href=" #">Không tính phí giao dịch</a>
                      <a href=" #">Dịch vụ bảo đảm</a>
                      <a href=" #">Nhận thêm ưu đãi</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <span className="pb-1 italic font-bold border-b text-text border-b-text">
                Thông tin về bảo hiểm du lịch
              </span>
              <div className="flex flex-col gap-3 mt-4 text-base">
                <p>
                  Công ty TNHH Một Thành Viên Dịch vụ Lữ hành Mona thực hiện
                  chương trình TẶNG MIỄN PHÍ BẢO HIỂM DU LỊCH NỘI ĐỊA dành cho
                  tất cả du khách của Công ty và các chi nhánh trực thuộc tham
                  gia tour trọn gói trên tất cả các tuyến du lịch nội địa, khởi
                  hành trên toàn quốc, với mức bảo hiểm tối đa lên đến
                  150.000.000 VNĐ/khách/vụ.{" "}
                </p>
                <p>
                  Toàn bộ phí bảo hiểm được tặng miễn phí cho khách hàng của Lữ
                  hành Mona với chương trình, giá và chất lượng dịch vụ tour
                  không đổi.
                </p>
                <p>
                  Thông tin chi tiết, vui lòng liên hệ các văn phòng thuộc Hệ
                  thống Lữ hành Mona trên toàn quốc.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
