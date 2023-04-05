import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open === false) setOpen(true);
    else setOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-[100px] z-[2]">
      <div className="container flex items-center justify-between">
        <img src="/images/logo.png" alt="logo" />
        <div className="flex gap-20 pr-2 hidden md:block">
          <div className="flex items-center gap-5">
            <a href="about.html">Home</a>
            <a href="about.html">About</a>
            <a href="about.html">Services</a>
            <a href="about.html">Pages</a>
            <a href="about.html">News</a>
            <a href="about.html">Contact</a>
          </div>
        </div>
        <div className="hidden md:block">
          <a href="#" className="theme-btn mr-2">
            CONSULTANCY <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 border-2 md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            onClick={handleClick}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {open ? (
        <div className="flex flex-col md:hidden items-end gap-5 pr-5">
          <div>
            <a href="about.html">Home</a>
          </div>
          <a href="about.html">About</a>
          <a href="about.html">Services</a>
          <a href="about.html">Pages</a>
          <a href="about.html">News</a>
          <a href="about.html">Contact</a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
