import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import control from "../pics/control.png";
import unnamed from "../pics/unnamed.png";

function Sidebar({ theme }) {
  const [open, setOpen] = useState(true);
  const [showUserSubMenu, setShowUserSubMenu] = useState(false);
  const userMenuRef = useRef(null);

  const Menus = [
    { title: "Dashboard", src: "Chart_fill", link: "/home" },
    {
      title: "Accounts",
      src: "User",
      link: "#",
      submenus: [
        { title: "Partenaires", link: "/partenaires" },
        { title: "Explorateurs", link: "/users" },
      ],
    },
    {
      title: "Publications",
      src: "Chat",
      gap: true,
      link: "/publications",
    },
  ];

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setShowUserSubMenu(false);
    }
  };

  const toggleUserSubMenu = () => {
    setShowUserSubMenu(!showUserSubMenu);
  };

  const handleSubmenuClick = () => {
    setShowUserSubMenu(false);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`${
          open ? "w-72" : "w-32"
        } ${theme === "dark" ? "bg-DarkBlue" : "bg-LightBlue"} h-screen p-2 pt-8 relative duration-300`}
      >
        <img
          src={control}
          alt="Control icon"
          className={`absolute cursor-pointer -right-3 top-12 w-7 border-DarkBlue
          border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-2 items-center p-8">
          <img
            src={unnamed}
            alt="Logo"
            className={`cursor-pointer w-20 duration-500 block float-left ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            <span className=" text-DarkBlue">Deal</span>Discover
          </h1>
        </div>
        <ul className="px-8">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              ref={Menu.title === "Accounts" ? userMenuRef : null}
              className={`flex flex-col  ${
                Menu.title === "Accounts" && "relative"
              }`}
            >
              <div
                className={`rounded-md p-2 cursor-pointer hover:bg-DarkBlue text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-5" : "mt-2"}`}
              >
                {Menu.submenus ? (
                  <div onClick={toggleUserSubMenu}>
                    <div className="flex">
                      <img
                        src={require(`../pics/${Menu.src}.png`)}
                        alt={Menu.title}
                      />
                      <span
                        className={`origin-left duration-200 ml-5 text-black font-medium ${
                          !open && "hidden"
                        }`}
                      >
                        {Menu.title}
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link to={Menu.link} className="no-underline text-white">
                    <div className="flex">
                      <img
                        src={require(`../pics/${Menu.src}.png`)}
                        alt={Menu.title}
                      />
                      <span
                        className={`origin-left duration-200 ml-5 text-black font-medium ${
                          !open && "hidden"
                        }`}
                      >
                        {Menu.title}
                      </span>
                    </div>
                  </Link>
                )}
              </div>
              {Menu.title === "Accounts" && showUserSubMenu && (
                <ul className="absolute top-full left-0 w-44 bg-LightBlue rounded-lg shadow-md mt-1">
                  {Menu.submenus.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-white py-2 px-4 hover:bg-DarkBlue cursor-pointer"
                      onClick={handleSubmenuClick}
                    >
                      <Link to={submenu.link}>{submenu.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
