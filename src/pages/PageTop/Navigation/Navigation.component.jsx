import React from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
const Navigation = () => {
  return (
    <nav
      className=" Navigation h-[6.4rem] bg-purple-600 mb-[100px]  bg-opacity-10 flex justify-center items-center p-[3rem] rounded-2xl "
      data-aos="fade-down"
      data-aos-delay="2000"
      data-aos-duration="3200"
    >
      <div className="flex-1">
        <Logo className="justify-self-start" />
      </div>
      <div className="flex-1 ">
        <ul className="flex  justify-end gap-[1.75rem] text-[18px]  text-slate-50 font-extrabold ">
          <li className="transition-all duration-300 hover:text-indigo-700">
            <a href="#home">HOME</a>
          </li>
          <li className="transition-all duration-300 hover:text-indigo-700">
            <a href="#about">ABOUT</a>
          </li>
          <li className="transition-all duration-300 hover:text-indigo-700">
            <a href="#project">PROJECTS</a>
          </li>
          <li className="transition-all duration-300 hover:text-indigo-700">
            <a href="#skill">SKILLS</a>
          </li>
          <li className="transition-all duration-300 hover:text-indigo-700">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
