import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="relative my-14">
        <div className="w-full h-[411px] sm:h-[650px]">
          <img
            src="/footer.jpg"
            alt=""
            className="z-10 object-cover w-full h-full"
          />
          <div className="absolute w-full top-0 flex mt-10 text-[#a5a5a5]">
            <div className="container">
              <div className="flex sm:block">
                <div className="flex flex-col w-1/4 gap-5 sm:w-full sm:gap-3">
                  <img
                    src="/logo-white.png"
                    alt=""
                    className="w-[120px] object-cover sm:w-full"
                  />
                  <span>Cổ Nhuế, Bắc Từ Liêm, Hà Nội</span>
                  <span>0966093801</span>
                  <span>nva030801@gmail.com</span>
                </div>
                <div className="flex w-1/2 sm:w-full sm:flex sm:mt-5">
                  <div className="flex flex-col w-1/2 gap-1">
                    <h1 className="text-lg font-bold capitalize">Tin tức</h1>
                    <ul>
                      <li className="py-2 text-sm">
                        <a href=" ">Bản tin Du Lịch Việt</a>
                      </li>
                      <li className="py-2 text-sm">
                        <a href=" ">Khám phá du lịch</a>
                      </li>
                      <li className="py-2 text-sm">
                        <a href=" ">Kinh nghiệm du lịch</a>
                      </li>
                      <li className="py-2 text-sm">
                        <a href=" ">Sự kiện du lịch</a>
                      </li>
                      <li className="py-2 text-sm">
                        <a href=" ">Tuyển dụng Du Lịch</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <h1 className="text-lg font-bold capitalize">Menu</h1>
                    <ul>
                      <li className="py-2 text-sm">
                        <a href=" ">Bản tin Du Lịch Việt</a>
                      </li>
                      <li className="py-2 text-sm">
                        <a href=" ">Khám phá du lịch</a>
                      </li>
                      <li className="py-2 text-sm">
                        <a href=" ">Kinh nghiệm du lịch</a>
                      </li>
                      <li className="py-2 text-sm">
                        <a href=" ">Sự kiện du lịch</a>
                      </li>
                      <li className="py-2 text-sm">
                        <a href=" ">Tuyển dụng Du Lịch</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col w-1/4 gap-5 sm:mt-5 sm:w-1/2">
                  <h1 className="text-lg font-bold capitalize">
                    Tour phổ biến
                  </h1>
                </div>
              </div>
              <div className="h-[1px] mt-14 mb-10 bg-[#a5a5a5] w-full mx-auto sm:mt-5 sm:mb-5"></div>
              <div className="w-full text-center">© All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
