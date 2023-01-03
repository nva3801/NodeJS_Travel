import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { fetcher, link } from "../../config";
import useSWR from "swr";

const Header = () => {
  const navigate = useNavigate();
  const [header, setHeader] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  let [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
      const response = await axios.get(`${link}/category`);
    setCategories(response.data);
  };
  console.log(categories)
  const { data } = useSWR(`${link}/category-list`, fetcher);
  const categoryItems = data || [];
  console.log(categoryItems)
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role")
    navigate("/");
  }
  const handleClick = () => {
    
  }
  return (
    <header
      className={
        header
          ? "fixed bg-white top-0 w-full leading-[60px] h-[60px] transition-all z-50 border border-b-2 justify-between"
          : "bg-transparent w-full h-[110px] fixed top-0 z-10 leading-[110px] transition-all text-white z-50 md:leading-[60px] md:h-[60px] "
      }
    >
      <div className="container md:p-0">
        <div className="flex items-center justify-between h-full md:mt-3 md:block">
          <NavLink to="/" className="max-h-[60px] w-[120px] ">
            <img
              src="/logo.png"
              alt=""
              className={
                header
                  ? "object-cover w-full h-full block md:ml-3 md:h-[40px] md:w-[120px] md:object-cover"
                  : "hidden"
              }
            />
            <img
              src="/logo-white.png"
              alt=""
              className={
                header
                  ? "hidden"
                  : "block w-full h-full object-cover md:h-[40px] md:w-[120px] md:object-cover md:ml-3"
              }
            />
          </NavLink>
          <div
            className={`relative md:text-black md:bg-white md:px-4 md:pb-4 md:${
              open ? "" : "hidden"
            }`}
          >
            <ul className="flex gap-8 font-bold uppercase md:block md:gap-2 md:flex-col">
              {categories.map(item =>
                item.categoryList?.length > 0 ? (<li className="relative cursor-pointer dropdown" key={item._id}>
                  <span className="hover:border-b-2 hover:border-b-primary hover:pb-4">
                    {item.title}
                  </span>
                  <div className="dropdown-item">
                    <div
                        className={`absolute flex w-[520px] grid-cols-3 leading-8 text-black bg-white gap-x-5 px-5 py-3 rounded-lg ${
                            header ? "top-[100%]" : "top-[80%]"
                        } md:w-full md:grid-cols-1 md:block md:p-0 md:relative`}
                    >
                      {item.categoryList.map((item1) => (
                        <div className="flex flex-col w-1/3 md:w-full" key={item1._id}>
                          <span>{item1.title}</span>
                          {categoryItems.map((item2) =>
                            item1.slug === item2.slug ? (
                              <div className="block" key={item2.id}>
                                {item2.categoryItem.map((item3) => (
                                  <NavLink
                                    to={`/category/${item3.slug}`}
                                    className="text-[#ccc] hover:bg-[#ccc] hover:text-black hover:rounded-lg hover:px-2 block"
                                    key={item3.id}
                                  >
                                    {item3.title}
                                  </NavLink>
                                ))}
                              </div>
                            ) : (
                              "")
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>) : (
                    <li key={item._id}>
                      <NavLink to={`/${item.slug}`} className="hover:border-b-2 hover:border-b-primary hover:pb-4">{item.title}</NavLink>
                    </li>
                )
              )}
              <li
                className={`bg-primary p-1 h-[32px] ${
                  header ? "mt-[13px]" : "mt-[38px] md:mt-[20px]"
                } rounded-lg`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </li>
              <li>
                {username != null && token != null ? (
                  <div>
                    <span className='pt-2 pr-4 text-green-400'>{username}</span>
                    <div className="inline-flex bg-white border rounded-md" onClick={() => setDropdownMenu(!dropdownMenu)}>
                        <a href="# " className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md" >
                            Menu
                        </a>
                        <div className={`${dropdownMenu ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} relative transition-all`}>
                            <div className="absolute right-0 z-10 w-56 mt-3 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg cursor-pointer top-[35px] py-2">
                              {role === 'true' ? (
                                <div className="px-2 py-1">
                                  <div onClick={() => handleClick()} className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700">Quản lý</div>
                                </div>
                              ) : ("")}
                              <div className="px-2 py-1">
                                <NavLink to="/order-management" className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700">Quản lý đơn hàng</NavLink>
                              </div>
                              <div className="px-2 py-1">
                                <div className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700" onClick={() => handleLogout()}>Logout</div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={` p-1 h-[32px] ${
                      header ? "mt-[13px] bg-primary text-white" : "mt-[38px] md:mt-[20px] bg-white text-primary"
                      } rounded-lg `}>
                    <NavLink to={"/dang-nhap"} >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6">
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </NavLink>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div
            className="absolute hidden px-2 py-1 text-black bg-white rounded-sm right-4 top-3 md:block"
            onClick={() => setOpen(!open)}
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
