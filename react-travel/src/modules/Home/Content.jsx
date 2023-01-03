import React from "react";

const Content = () => {
  return (
    <section className="content">
      <div className="relative my-14 pb-14">
        <div className="container">
          <div className="flex gap-x-5 sm:block">
            <div className="w-1/3 sm:w-full">
              <h1 className="text-2xl font-bold text-center uppercase ">
                Nhận xét
              </h1>
              <div className="mt-10 bg-primary h-[440px] relative">
                <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <div className="w-full ">
                    <img
                      src="/logo1.png"
                      alt=""
                      className="object-cover w-[90px] h-full rounded-full mx-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="my-2 italic">Hà Phương</h4>
                    <p className="w-full px-5 mb-4 italic">
                      Tôi đi Đà Lạt thấy các dịch vụ khá ổn từ khách sạn, nhà
                      hàng, phương tiện di chuyển đến hành trình tham quan.
                      Không phát sinh chi phí phụ là điều tuyệt với.
                    </p>
                    <p className="mb-4">-Tour Đà Lạt-</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3 sm:w-full md:mt-5">
              <h1 className="text-2xl font-bold text-center uppercase">
                CẨM NANG DU LỊCH TỪ A – Z
              </h1>
              <div className="flex mt-10 gap-x-5 sm:block">
                <div className="w-1/2 md:w-full">
                  <img src="/content-1.jpg" alt="" className="w-full" />
                  <h1 className="mt-3 mb-1 text-xl font-medium">
                    Tất tần tật những kinh nghiệm bạn cần biết trước khi du lịch
                    Bình Ba
                  </h1>
                  <div className="cursor-pointer hover:text-blue-400">
                    <div>7 Tháng Mười Hai, 2018</div>
                    <div className="h-1 mt-2 mb-2 bg-[#0000001a] max-w-[30px] mx-auto"></div>
                    <p>
                      Giới thiệu sơ lượt về đảo Bình Ba Bình Ba là một đảo nhỏ,
                      diện [...]
                    </p>
                  </div>
                </div>
                <div className="w-1/2 md:w-full md:mt-5">
                  <img src="/content-2.jpg" alt="" className="w-full" />
                  <h1 className="mt-3 mb-1 text-xl font-medium">
                    Vì sao bạn phải đến Đài Loan một lần trong đời?
                  </h1>
                  <div className="cursor-pointer hover:text-blue-400">
                    <div>7 Tháng Mười Hai, 2018</div>
                    <div className="h-1 mt-2 mb-2 bg-[#0000001a] max-w-[30px] mx-auto"></div>
                    <p>
                      Khung cảnh tuyệt đẹp: Đài Loan được bao phủ bởi màu xanh
                      của cây cối và [...]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
