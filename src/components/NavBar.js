import { useState } from "react";
import { navItems } from "../constants/NavMenuItems";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <nav
      className={`w-full flex justify-between items-center bg-[#222222]/90 py-4 px-6 duration-300 transition-all ease-in-out rounded-lg ${
        isNavBarOpen && "rounded-b-none"
      } container mx-auto`}
    >
      <div className="text-xl font-body-medium text-white">GymFit</div>
      <ul className="gap-6 text-white font-primary font-light md:flex hidden">
        {navItems.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer">
              {item.name}
            </li>
          );
        })}
      </ul>
      {isNavBarOpen && (
        <button
          className="border-none outline-none cursor-pointer"
          onClick={() => {
            setIsNavBarOpen(!isNavBarOpen);
          }}
        >
          <IoMenu className="text-[#03F5F4]" size={25} />
        </button>
      )}

      <div
        className={`rounded-b-lg bg-[#222222] p-6 z-20 absolute right-4 left-4 transition-all duration-300 ease-in-out opacity-95 ${
          isNavBarOpen ? "block" : "hidden"
        }`}
      >
        <ul className="gap-6 text-white font-primary font-light flex flex-col">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="cursor-pointer">
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
