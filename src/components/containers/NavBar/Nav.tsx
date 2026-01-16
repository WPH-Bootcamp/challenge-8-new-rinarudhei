import React, { useState } from "react";
import MovieAppSvg from "../../svgs/MovieAppSvg";
import MagnifierSvg from "../../svgs/MagnifierSvg";
import HamburgerSvg from "../../svgs/HamburgerSvg";
import { Link, useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const [blurStyle, setBlurStyle] = useState("");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const header = document.getElementById("nav-header");
  const handleScroll = () => {
    const scrollThreshold = 100;
    if (window.scrollY > scrollThreshold) {
      header?.classList.add("backdrop-blur-sm");
      setBlurStyle("backdrop-blur-sm");
    } else {
      setBlurStyle("");
    }
  };
  window.addEventListener("scroll", handleScroll);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/?q=${encodeURIComponent(searchText.trim())}`);
    setSearchText("");
  };

  return (
    <header
      id="nav-header"
      className={
        "w-dvw min-w-98.25 max-w-360 h-16 xl:h-22.5 bg-transparent  z-50 sticky top-0  flex flex-row justify-between items-center px-4 md:px-25 xl:px-35 mx-auto " +
        blurStyle
      }
    >
      <div className="flex md:gap-12 xl:gap-20">
        <MovieAppSvg></MovieAppSvg>
        <div className="hidden md:flex md:items-center gap-12 text-white text-base leading-7.5">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-60.75 md:h-12 xl:h-14 hidden md:flex justify-start items-center rounded-2xl border py-2 px-4 gap-2 bg-[#0a0d12]/60 border-[#252b37]"
      >
        <button type="submit" aria-label="Search button">
          <MagnifierSvg strokeColor="stroke-[#717680]"></MagnifierSvg>
        </button>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-44 text-start my-auto text-base leading-7.5  text-[#717680] focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 overflow-x-scroll rounded-md"
          placeholder="Search Movie"
        />
      </form>
      <div className="w-18 h-6 flex justify-between items-center md:hidden">
        <MagnifierSvg strokeColor="stroke-[#FDFDFD]"></MagnifierSvg>
        <HamburgerSvg></HamburgerSvg>
      </div>
    </header>
  );
};

export default Nav;
