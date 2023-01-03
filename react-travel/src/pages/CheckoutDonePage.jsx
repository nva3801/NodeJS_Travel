import React from "react";
import { NavLink } from "react-router-dom";

const CheckoutDonePage = () => {
  return (
    <div>
      <div className="h-[100vh] flex items-center justify-center flex-col">
        <div className="max-w-[1000px] mx-auto text-center">
          <NavLink to="/" className="w-full">
            <img src="logo.png" alt="" className="w-[50%] mx-auto" />
          </NavLink>
          <p className="text-[40px] py-10 font-bold text-center capitalize">
            Bạn đã đặt tour thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất
          </p>
          <NavLink to="/" className="max-w-[120px]">
            <button className="text-center bg-primary text-white text-3xl py-4 rounded-lg w-[400px] mx-auto">
              Quay về trang chủ
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDonePage;
