import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
  return (
    <div id='foot'>
      <footer className="text-center bg-gray-900 text-white">
  <div className="container flex flex-col px-6 pt-6">
    <div className="flex justify-center  text-5xl mb-6 gap-10">
    
    
  
     <a href='https://github.com/surwaseonkar1512'>   <AiFillGithub/></a>
                   <a href='https://www.linkedin.com/in/onkar-surwase-7b357124a/'><AiFillLinkedin/></a>
                   <a href='https://www.instagram.com/surwase.onkar/'> <AiFillInstagram/></a>
    </div>
    <div className=" flex text-center justify-center ">
   
    <a className="text-whitehite text-red-600" href="https://tailwind-elements.com/">  <span className="text-2xl flex flex-row  font-bold text-red-600"
     > <span className='text-white font-bold '>© 2023 Copyright:  </span>  TopSixTreks</span></a>
  </div>
  <p className='text-bold text-white'> Disclaimer : This Website created for education purpose Only !</p>
  </div>

 
</footer>
    </div>
  )
}

export default Footer
