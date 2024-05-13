import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";

const navMenuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact Us",
    url: "#learn_more",
  },
  {
    title: "Our Project",
    url: "#learn_more",
  },
  {
    title: "About us",
    url: "#about",
  },
  {
    title: "Gallery",
    url: "#subsidiaries",
  },
  {
    title: "Newsletters",
    url: "#board",
  },
  
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useLocation();
  const navigate = useNavigate();

  return (
    <div className="z-[999] bg-[white text-gray-900  w-full fixed top-0 shadow">
      <nav className={`px-5 lg:px-12 max-w-[1440px] bg-white ${styles.navbarItems}`}>
        <div className="text-2xl font-bold"></div>
        <div
          className={`cursor-pointer pr-2 ${styles.menuIcon}`}
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <AiOutlineClose size={25} color="black" />
          ) : (
            <AiOutlineMenu size={25} color="black" />
          )}
        </div>
        <div
          className={` ${
            menu ? styles.nav_menu + " " + styles.active : styles.nav_menu
          }`}
        >
          {navMenuItems.map((menu, idx) => (
            <HashLink to={menu.url}>
              <div
                key={idx}
                className={`flex gap-2 items-center relative font-semibold border-b-4 border-transparent text-sm cursor-pointer hover:border-pink hover:lg:text-primary-green-50 hover:lg:border-primary-green-50   transition- duration-200 ${
                  router.pathname === menu.url
                    ? "lg:border-pink lg:text-primary-green-50"
                    : ""
                } `}
                onClick={() => {
                  navigate(menu.url);
                  setMenu(false);
                }}
              >
                {menu.title}
              </div>
            </HashLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
