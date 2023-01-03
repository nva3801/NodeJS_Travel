import React from "react";

const Reason = () => {
  return (
    <section className="reason">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-5 text-3xl font-medium uppercase">
            Thiên đường hội tụ
          </h1>
          <div className="flex grid-cols-3 gap-10 my-10 sm:block sm:grid-cols-1">
            <div className="text-center px-7 pb-7">
              <div className="w-[100px] h-[100px] mx-auto">
                <img src="/hotel.png" alt="" className="" />
              </div>
              <h1 className="py-5 text-xl font-bold">Khách sạn tốt nhất</h1>
              <p className="text-base">
                Để mọi người mọi nhà đều có thể đi du lịch với giá cả hợp lý
                nhất.
              </p>
            </div>
            <div className="text-center px-7 pb-7">
              <div className="w-[100px] h-[100px] mx-auto">
                <img src="/service.png" alt="" className="" />
              </div>
              <h1 className="py-5 text-xl font-bold">Hỗ trợ 24/7</h1>
              <p className="text-base">
                Để mọi người mọi nhà đều có thể đi du lịch với giá cả hợp lý
                nhất.
              </p>
            </div>
            <div className="text-center px-7 pb-7">
              <div className="w-[100px] h-[100px] mx-auto">
                <img src="/price.png" alt="" className="" />
              </div>
              <h1 className="py-5 text-xl font-bold">Giá luôn tốt nhất</h1>
              <p className="text-base">
                Để mọi người mọi nhà đều có thể đi du lịch với giá cả hợp lý
                nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
