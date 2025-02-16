import React from 'react'
import Heard from '../../assets/heard.svg'
import Raketa from '../../assets/raketa.svg'
import Ava from '../../assets/ava.svg'
import Nave from '../../assets/nave.svg'
import Green2 from '../../assets/green2.svg'

const Card = () => {
  return (
    <div className='app-container'>

      <div
        className='w-[1029px] h-[372px] bottom-[1200px] left-[80px] relative rounded-[46px] 
       bg-gradient-to-tl from-[#FBFBFB] to-[#E5E5E5]  m-auto'
      >
        <div>
          <div className='flex gap-40 justify-center  pt-13'>
            <div className='w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-[#35C66B] to-[#237249]'>
              <img className='relative bottom-3.25 left-1.75'src={Heard}alt=''/>
              <h3 className="w-[82px] h-[52px] font-[Montserrat] relative bottom-5 left-7
               font-medium text-[32px] leading-[53px] text-[#121517]">Tasty</h3>
              <p className="w-[200px] h-[66px] font-[Montserrat] font-normal 
              text-[20.13px] leading-[33px] text-[#121517E5] relative bottom-3 right-5">
                We have the most delicious coffee</p>
            </div>

            <div className='w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-[#35C66B] to-[#237249]'>
              <img className='relative top-1 left-1' src={Raketa} alt='' />
              <h3 className="w-[82px] h-[52px] font-[Montserrat] relative top-5 left-7
               font-medium text-[32px] leading-[53px] text-[#121517]">Fast</h3>
              <p className="w-[200px] h-[66px] font-[Montserrat] font-normal 
              text-[20.13px] leading-[33px] text-[#121517E5] relative top-6 right-2">
                Our cafe will serve <span className="pl-8.5"> you quickly</span></p>
            </div>

            <div className='w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-[#35C66B] to-[#237249]'>
              <img className='relative top-7 right-0.25' src={Ava} alt='' />
              <h3 className="w-[82px] h-[52px] font-[Montserrat] relative top-13.75 left-1
               font-medium text-[32px] leading-[53px] text-[#121517]">Available</h3>
              <p className="w-[220px] h-[66px] font-[Montserrat] font-normal 
              text-[20.13px] leading-[33px] text-[#121517E5] relative top-15 right-5">
                Cafe will serveat the most pleasant prices</p>
            </div>
          </div>
        </div>
      <div>
        <img className="absolute bottom-[260px] ml-[-100px]" src={Nave} alt='' />
        <img className="absolute mt-[-400px] ml-[-200px] m-auto" src={Green2} alt='' />
      </div>
      </div>
    </div>
  )
}

export default Card
