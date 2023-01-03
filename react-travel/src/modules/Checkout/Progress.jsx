import React from "react";

const Progress = () => {
  return (
    <section className="progress">
      <div className="container">
        <div className="flex w-full">
          <div className="w-1/4 py-3 text-lg font-medium text-center ">
            <a href=" " className="p-3 progress active">
              1. CHỌN DỊCH VỤ
            </a>
          </div>
          <div className="w-1/4 py-3 text-lg font-medium text-center ">
            <a href=" " className="p-3">
              2. NHẬP THÔNG TIN HÀNH KHÁCH
            </a>
          </div>
          <div className="w-1/4 py-3 text-lg font-medium text-center ">
            <a href=" " className="p-3">
              3. THANH TOÁN
            </a>
          </div>
          <div className="w-1/4 py-3 text-lg font-medium text-center ">
            <a href=" " className="p-3">
              4. XÁC NHẬN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
