import { useState } from "react";const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open === false) setOpen(true);
    else setOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-[100px] z-[2]">
      <div className="container flex items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <a href="/">
              <img
                src="/images/Logo/logo.png"
                className="w-[200px] h-[60px]"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
