import React, { useState } from "react";
import MovieAppSvg from "../../svgs/MovieAppSvg";
import MagnifierSvg from "../../svgs/MagnifierSvg";
import HamburgerSvg from "../../svgs/HamburgerSvg";
import { Link, useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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

  const handleClicked = () => {
    const form = document.getElementById("form") as HTMLFormElement;
    const magnifier = document.getElementById("magnifier") as HTMLElement;

    form.classList.toggle("hidden");
    form.classList.toggle("flex");
    form.classList.toggle("focus");
    magnifier.classList.toggle("hidden");
  };

  return (
    <header
      id="nav-header"
      className={
        "w-dvw min-w-98.25 max-w-360 h-16 xl:h-22.5 bg-transparent  z-50 sticky top-0  flex flex-row justify-between items-center px-4 md:px-25 xl:px-35 mx-auto " +
        blurStyle
      }
    >
      <div className="flex md:gap-12 xl:gap-20 z-50">
        <MovieAppSvg></MovieAppSvg>
        <div className="hidden md:flex md:items-center gap-12 text-white text-base leading-7.5">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
      <form
        id="form"
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
      <div
        id="magnifier"
        className="w-18 h-6 flex justify-between items-center md:hidden"
      >
        <button onClick={handleClicked}>
          <MagnifierSvg strokeColor="stroke-[#FDFDFD]"></MagnifierSvg>
        </button>
        {!isOpen ? (
          <button onClick={toggleMenu}>
            <HamburgerSvg></HamburgerSvg>
          </button>
        ) : (
          <button onClick={toggleMenu} className="z-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L20 20M20 2L2 20"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
      {isOpen && (
        <div
          className="absolute w-full h-screen left-0 top-0 bg-black flex flex-col items-center  z-49"
          aria-expand={isOpen}
        >
          <ul className="w-90.25 md:hidden flex flex-col gap-4 text-[#ffffff] absolute top-22 left-4 text-base leading-7.5">
            <Link to="/" className="p-2 gap-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/favorites" className="p-2 gap-2" onClick={toggleMenu}>
              Favorites
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
