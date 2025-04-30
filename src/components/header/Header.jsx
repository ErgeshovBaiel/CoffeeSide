import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#121517] z-50 pt-[30px]">
      <div className="app-container flex items-center justify-between max-w-[1200px] mx-auto px-6">
        <h1 className="font-[Montserrat] font-extrabold  ml-2 text-[37.6px] leading-[41.16px] 
        bg-gradient-to-r from-[#35C66B] to-[#237249] bg-clip-text text-transparent">
          StarBucks
        </h1>
        <ul className="flex gap-10 font-[Montserrat] text-[20px] leading-[23.37px] text-[#D9D9D9]">
          <li>Home</li>
          <li>Select</li>
          <li>Shop</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
