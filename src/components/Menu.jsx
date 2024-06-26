import { useState } from "react";
import Menulists from "../dB/MenuList";

import MenuOpenIcon from "../assets/MenuOpenIcon.svg";
import MenuCloseIcon from "../assets/MenuCloseIcon.svg";

function Menu() {
  let [open, setOpen] = useState(false);
  return (
    <div className="flex col-span-2 justify-center items-center">
      <div
        className="fixed top-[2.1rem] right-[2.5rem] z-[10] md:hidden "
        onClick={() => setOpen(!open)}
      >
        {!open ? <MenuOpenIcon /> : <MenuCloseIcon />}
      </div>
      <ul
        className={`bg-white/80  flex-1 fixed top-0 right-0 h-screen py-6 w-[70%] pl-[2rem]
      flex flex-col duration-500 ease-linear z-[9] ${
        !open ? "right-[-100%] hidden md:flex" : "right-0"
      } md:bg-transparent md:flex-row md:right-0 md:h-[7rem] md:backdrop-opacity-0`}
      >
        {Menulists.map((Menulist, index) => (
          <li
            key={index}
            className="px-[2rem] font-medium text-[0.95rem] py-3 "
          >
            <a href={Menulist.link} onClick={() => setOpen(!open)}>
              {Menulist.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
