import React from 'react'
import Coffee from "../../assets/coffee.svg"

const Hero = () => {
  return (
    <div className='app-container'>
      <div  className="">

      <div>
        <p
          className='w-[543px] h-[176px] m-auto relative top-[80px] right-[200px]
         text-white  font-[Montserrat] font-extrabold text-[80px] leading-[87.58px]'
        >
          New Cafe
          <div className='flex gap-6'>
            <span>by</span>
            <span
              className='bg-gradient-to-r from-[#35C66B] to-[#237249]
               bg-clip-text text-transparent'
            >
              StarBucks
            </span>
          </div>
        </p>

        <div className='w-[1200px] m-auto relative'>

        <p
          className='w-[600px] h-[66px] relative top-[150px] left-[140px]
         text-[#D9D9D9] font-[Montserrat] font-normal text-[20px] leading-[33px]'
        >
          Have time to buy the most harmonious drinks in the new Starbucks
          coffee and don't forget about the discount!
        </p>

        <div className="bottom-[70px] absolute">

          <button
            className='w-[334px] h-[74.65px] relative top-[350px] left-[140px] 
        rounded-[83px]  bg-gradient-to-r from-[#35C66B] to-[#237249]
        text-[24px] leading-[36px] font-[Montserrat]  font-semibold cursor-pointer 
         text-[#FFFFFF]'
          >
            Select a coffee
          </button>

          <button
            className='text-[24px] text-[#D9D9D9] leading-[36px] font-[Montserrat] cursor-pointer font-normal 
           w-[168px] h-[75px] absolute top-[350px] left-[500px] rounded-[83px] bg-[#121517] 
           border'
        
          >
            More
          </button>
        </div>
        </div>

        <div className="mt-10">
        <div className="flex  gap-11.5 m-auto relative top-[300px] left-37.5 mt-5 ">
        <h1 className="font-[Montserrat]
        font-normal text-[62px] leading-[68px] text-[#FFFFFF]">9k
        <span className="font-[Montserrat] font-normal text-[62px] leading-[68px]
        bg-gradient-to-r from-[#35C66B] to-[#237249]
           bg-clip-text text-transparent">+</span>
           </h1>
        <h1 className="font-[Montserrat]
        font-normal text-[62px] leading-[68px] text-[#FFFFFF]">2k
        <span className="font-[Montserrat] font-normal text-[62px] leading-[68px]
        bg-gradient-to-r from-[#35C66B] to-[#237249]
           bg-clip-text text-transparent">+</span>
           </h1>
        <h1 className="font-[Montserrat]
        font-normal text-[62px] leading-[68px] text-[#FFFFFF]">28k
        <span className="font-[Montserrat] font-normal text-[62px] leading-[68px]
        bg-gradient-to-r from-[#35C66B] to-[#237249]
           bg-clip-text text-transparent">+</span>
           </h1>
        </div>

        <div className="flex gap-11.5">
        <p className="w-[123px] h-[58px] relative top-[305px] 
        font-[Montserrat] left-[150px] text-[#D9D9D9]">Premium Users</p>
        <p className="w-[123px] h-[58px] relative top-[305px] 
        font-[Montserrat] left-[140px] text-[#D9D9D9]">Happy Customer</p>
        <p className="w-[123px] h-[58px] relative top-[305px] 
        font-[Montserrat] left-[130px] text-[#D9D9D9]">Awards Winning</p>
        </div>
        </div>

      </div>

        <img className="relative left-225 mt-[-400px]" src={Coffee} alt="" />
      </div>
    </div>
  )
}

export default Hero
