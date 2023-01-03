import React from "react";

const Success = () => {
  return (
    <section className="success">
      <div className="relative my-14">
        <div className="w-full h-[600px] sm:h-[630px] ">
          <div className="bg-[#00000099] absolute inset-0 z-10"></div>
          <img
            src="/banner3.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute z-20 w-full -translate-x-1/2 -translate-y-1/2 sm:py-5 sm:h-full top-1/2 left-1/2">
            <div className="container">
              <div className="text-center text-white">
                <p className="mb-5 text-base">PHỤNG SỰ KHÁCH HÀNG 8 NĂM</p>
                <h1 className="w-full mb-5 text-3xl font-medium uppercase sm:text-xl">
                  THÀNH QUẢ CỦA CỦA MONA TRAVEL
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-32 my-20 sm:gap-10">
                <div className="flex flex-col gap-6 mx-auto text-center">
                  <img
                    src="/tour-success.png"
                    alt=""
                    className="h-[80px] w-[80px] mx-auto"
                  />
                  <span className="text-4xl font-bold text-primary">
                    20,548+
                  </span>
                  <span className="text-lg text-white">Tour hoàn thành</span>
                </div>
                <div className="flex flex-col gap-6 mx-auto text-center">
                  <img
                    src="/tour-guest.png"
                    alt=""
                    className="h-[80px] w-[80px] mx-auto"
                  />
                  <span className="text-4xl font-bold text-primary">
                    60,419+
                  </span>
                  <span className="text-lg text-white">Khách hàng</span>
                </div>
                <div className="flex flex-col gap-6 mx-auto text-center">
                  <img
                    src="/tour-address.png"
                    alt=""
                    className="h-[80px] w-[80px] mx-auto"
                  />
                  <span className="text-4xl font-bold text-primary">
                    5,000+
                  </span>
                  <span className="text-lg text-white">Điểm tham quan</span>
                </div>
                <div className="flex flex-col gap-6 mx-auto text-center">
                  <img
                    src="/tour-car.png"
                    alt=""
                    className="h-[80px] w-[80px] mx-auto"
                  />
                  <span className="text-4xl font-bold text-primary">856+</span>
                  <span className="text-lg text-white">Phương tiện</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
