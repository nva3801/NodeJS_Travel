import React from "react";

const Countdown = () => {
  return (
    <section className="countdown">
      <div className="relative my-14">
        <div className="w-full h-[630px]">
          <div className="bg-[#00000099] absolute inset-0 z-10"></div>
          <img
            src="/banner4.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute z-20 w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="container">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold sm:text-2xl">
                  Ưu đãi đặc biệt cho 50 khách hàng đầu tiên <br /> đặt Tour
                  nước ngoài
                  <span className="px-1 ml-2 text-black bg-primary">
                    Giảm ngay 40%
                  </span>
                </h1>
                <p className="my-8 text-base">Thời gian chỉ còn</p>
                <div className="flex gap-x-3 max-w-[720px] grid-cols-3 mx-auto mb-10">
                  <div className="flex flex-col w-full px-2 pt-4 pb-2 font-bold text-black rounded-lg bg-primary">
                    <span className="text-[64px] font-bold">0</span>
                    <span className="text-[20px]">Giờ</span>
                  </div>
                  <div className="flex flex-col w-full px-2 pt-4 pb-2 font-bold text-black rounded-lg bg-primary">
                    <span className="text-[64px] font-bold">0</span>
                    <span className="text-[20px]">Giờ</span>
                  </div>
                  <div className="flex flex-col w-full px-2 pt-4 pb-2 font-bold text-black rounded-lg bg-primary">
                    <span className="text-[64px] font-bold">0</span>
                    <span className="text-[20px]">Giờ</span>
                  </div>
                </div>
                <div className="flex py-3 mx-auto text-base font-bold text-black uppercase transition-all rounded-lg cursor-pointer hover:text-white px-7 w-fit bg-primary">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <button className="">Đặt ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
