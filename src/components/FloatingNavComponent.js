import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineFolder } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";
import { useState } from "react";

const FloatingNavComponent = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="bg-black bg-opacity-30 flex flex-row w-fit block mx-auto fixed inset-x-0 bottom-4 place-items-center md:gap-1 py-2.5 px-6 rounded-full z-40">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href={"#"}
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome className="text-color-light bg-transparent text-3xl md:text-4xl hover:bg-background-variant rounded-full p-1.5 hover:bg-opacity-30 " />
      </a>
      <a
        href={"#about"}
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser className="text-color-light bg-transparent text-3xl md:text-4xl hover:bg-background-variant rounded-full p-1.5 hover:bg-opacity-30 " />
      </a>
      <a
        href={"#experience"}
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook className="text-color-light bg-transparent text-3xl md:text-4xl hover:bg-background-variant rounded-full p-1.5 hover:bg-opacity-30 " />
      </a>
      <a
        href={"#portfolio"}
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFolder className="text-color-light bg-transparent text-3xl md:text-4xl hover:bg-background-variant rounded-full p-1.5 hover:bg-opacity-30 " />
      </a>
      <a
        href={"#contact"}
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail className="text-color-light bg-transparent text-3xl md:text-4xl hover:bg-background-variant rounded-full p-1.5 hover:bg-opacity-30 " />
      </a>
    </nav>
  );
};

export default FloatingNavComponent;
