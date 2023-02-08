import React from 'react'
import bgv from '../assets/bgv3.mp4'
import Type from './Type'
import loog from '../assets/logo1.png'
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <div id='home' className=' font-Poppins bg-zinc-900 '>
    <div className='w-[100%] h-screen'>
 <div className='absolute  w-[100%] h-[100%] '>
 <Type/>
 <video  className='w-full h-[85vh] bg-transparent object-cover opacity-100 ' autoPlay muted   loop src={bgv}/>
 <div className='  bg-fixed bg-opacity-40 w-[100%] h-[100%] left-[-10%]  top-[50%] pb-[30rem] flex flex-col pt-[1rem] items-center font-Poppins text-5xl text-red-500
  '>
      <img width={60} height={60}  src={loog} />
      <Typewriter
         className='accent-lightprimary'
        options={{
          strings: ['    Welcome To Himalaya ! '],
          autoStart: true,
          loop: true,
          
        }}
      />

 </div>
 </div>
 </div>

 </div>
  )
}

export default Home