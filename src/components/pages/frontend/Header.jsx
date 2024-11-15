import {
  Bell,
  Mail,
  MessageCircleMore,
  ShoppingBag,
  Users,
} from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./partials/Logo";
import Searchbar from "../backend/partials/Searchbar";
import { StoreContext } from "../../store/storeContext";
import { setIsAdd } from "../../store/StoreAction";

const Header = ({booksCart, bestsellersCart}) => {

  const {dispatch} = React.useContext(StoreContext)

  const [scrollPosition, setScrollPosition] = React.useState(0);

  let cartCount = booksCart.length + bestsellersCart.length 

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleOpenCart = () => dispatch(setIsAdd(true));
  return (
    <>
      <header
        className={`px-4 py-3 transition-all z-50 bg-[#F4F1EA] shadow-md border-b-2 border-gray-200 ${
          scrollPosition > 1 ? "fixed top-0 left-0 w-full" : ""
        }`}
      >
        <div className='container'>
          <div className='flex justify-between items-center '>
            <div className='logo'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>

            <ul className='header-nav flex gap-10 items-center'>
              <li>
                <NavLink
                  to='/home'
                  className='text-base font-bold text-[#382110]'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/location'
                  className='text-base font-bold text-[#382110]'
                >
                  Location
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className='text-base font-bold text-[#382110]'
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/blog'
                  className='text-base font-bold text-[#382110]'
                >
                  Blog
                </NavLink>
              </li>
            </ul>

            <ul className='flex justify-center gap-5'>
              <li>
                <a
                  href=''
                  className='size-9 rounded-full bg-[#635C52] grid place-content-center'
                >
                  <Bell stroke={"#fff"} size={15} />
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='size-9 rounded-full bg-[#635C52] grid place-content-center'
                >
                  <MessageCircleMore stroke={"#fff"} size={15} />
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='size-9 rounded-full bg-[#635C52] grid place-content-center'
                >
                  <Mail stroke={"#fff"} size={15} />
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='size-9 rounded-full bg-[#635C52] grid place-content-center'
                >
                  <Users stroke={"#fff"} size={15} />
                </a>
              </li>
            </ul>

            <button className="relative" onClick={handleOpenCart}>
        {cartCount > 0 && <span className='absolute -top-2 -left-2 size-[17px] leading-none text-[10px] bg-accent text-white rounded-full grid place-content-center'>{cartCount}</span>}
       
        <ShoppingBag stroke={"#382110"} />
      </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
