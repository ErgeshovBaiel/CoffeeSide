import React from 'react'

const Header = () => {
  return (
    <div className="app-container flex gap-25">
      <h1 className="w-[205px] h-[41px] mt-[48px] ml-[130px]
       font-[Montserrat] font-extrabold text-[37.6px] leading-[41.16px]
       bg-gradient-to-r from-[#35C66B] to-[#237249] bg-clip-text text-transparent text-6xl">StarBucks </h1>
      <ul className="w-[400px] h-[23px] font-normal 
      text-[20px] leading-[23.37px] flex gap-24
      font-[Montserrat] mt-[57px] text-[#D9D9D9]  ">
      <li>Home</li>
      <li>Select</li>
      <li>Shop</li>
      </ul>
      <div className='flex gap-5'>
      <button></button>
      <button></button>
      </div>
    </div>
  )
}

export default Header