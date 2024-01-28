import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

import { BsBag } from "react-icons/bs";

import Logo from "../img/logo.svg";
import { AuthGoogleContext } from "../contexts/AuthGoogle";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { logoutIsOpen, SetLogoutIsOpen } = useContext(AuthGoogleContext);
  const { itemAmount } = useContext(CartContext);
  const { user } = useContext(AuthGoogleContext);

  console.log(user);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all `}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/home"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        <div className="fixed top-9 right-28">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>

        <div
          onClick={() => SetLogoutIsOpen(!logoutIsOpen)}
          className="w-12 h-12"
        >
          {console.log(logoutIsOpen)}
          <img
            className="rounded-full"
            src={user ? user.photoURL : ""}
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
