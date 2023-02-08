import React from 'react'
import { MdLocationOn,MdOutlineAccessTimeFilled } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import  'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import    'swiper/css/scrollbar';
import map from "../assets/evrmap.png";
import emp from "../assets/emap.png";
const Mount = () => {
  return (
   
    <div>
    <div className='p-[1px] w-[100%] h-[100vh] overflow-hidden bg-fixed  bg-black '>
    
    <Swiper 
    modules={[Navigation, Pagination,Scrollbar, A11y ]}
     spaceBetween={50}
     
     loop='true'
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
    >
      
    
      <SwiperSlide>
      <div className=' bg-Me1 min-h-screen bg-center font-Poppins bg-opacity-100 flex  bg-cover justify-center pt-[10rem] no-repeat'>
      <div className="flex flex-col gap-3 items-center">
      <h1 className="text-red-500  text-6xl items-center justify-center  font-bold"> Everest Base Camp</h1>
      <button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
   <MdLocationOn class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdLocationOn>
     <span>Nepal</span>
   </button>

<button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdOutlineAccessTimeFilled class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdOutlineAccessTimeFilled>
  <span>Duration :13 days</span>
</button>
<img className='pt-[-30px]' src={emp} width={500} height={500}/>
      </div>
               </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' bg-Me2 min-h-screen bg-center font-Poppins bg-opacity-60 flex  bg-cover justify-center pt-[10rem] no-repeat'>
      <div className="flex flex-col gap-3 items-center">
      <h1 className="text-red-500 text-6xl items-center justify-center  font-bold"> Everest Base Camp</h1>
      <button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdLocationOn class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdLocationOn>
  <span>Nepal</span>
</button>
<button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdOutlineAccessTimeFilled class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdOutlineAccessTimeFilled>
  <span>Duration :13 days</span>
</button>
      </div>
               </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' bg-Me3 min-h-screen bg-center font-Poppins bg-opacity-100 flex  bg-cover justify-center pt-[10rem] no-repeat'>
      <div className="flex flex-col gap-3 items-center">
      <h1 className="text-red-500 text-6xl items-center justify-center  font-bold"> Everest Base Camp</h1>
      <button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdLocationOn class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdLocationOn>
  <span>Nepal</span>
</button>
<button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdOutlineAccessTimeFilled class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdOutlineAccessTimeFilled>
  <span>Duration :13 days</span>
</button>
      </div>
               </div>
      </SwiperSlide>
      
    
    </Swiper>
    <div>
    </div>
    </div>
    
    
                                         <br/>
                     <div className=' h-auto  bg-gradient-to-r from-pink-300 to-white w-full  flex  flex-col  gap-10 lg:flex-row'>
                    <div className='flex flex-col gap-8 p-16'>
                    <h1 className='text-3xl text-black font-Poppins text-bold'>INFO</h1>
                             <div className='font-Poppins text-black   pl-7 flex-row flex  gap-8'>
                          
                                  <div className='font-bold'>
                                   Max Altitude
                                  <br />
                                  <span className='text-red-600 text-xl'> 18,200 ft</span>
                                  </div>
                                  <div className='font-bold'>
                                   Gread
                                  <br />
                                  <span className='text-red-600 font-bold'> Diffecult</span>
                                  </div>
                               </div>
                               <div className='font-Poppins text-black   pl-7 flex-row flex  gap-8'>
                               <div className='font-bold'>
                                   Duration 
                                  <br />
                                  <span className='text-red-600 text-xl'>13 Days</span>
                                  </div>
                                  <div className='font-bold'>
                                   Trekking Distance
                                  <br />
                                  <span className='text-red-600 font-bold'> 108km</span>
                                  </div>
                               </div>
                    </div>
           
           
                         

                           <div className='flex flex-col gap-8 p-16'>
                            
                            <h1 className='text-3xl text-black font-Poppins'>Circuit Trek</h1>
                                   <div className='font-Poppins text-black   pl-7 flex-row flex  gap-8'>
                                         <div className='font-bold gap-10'>
                                         <span className="destitext pl-3 ">Lukla - Monju - Namche Bazzar- tenguboche- Pangboche- Dingboche - Lobunche- Kalla pather- Base camp - Lukal airport</span>
                                         <br />
                                         <p className="text-gray-900 pt-10 text-xl shadow-1xl shadow-gray-400 gap-8 ">
                                            <h1 className='text-3xl text-black font-Poppins'> Everest Base Camp</h1>
                                        

<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 1 </span>
 Arrival at Kathmandu | The Capital Kingdom
<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 2   </span>
Kathumandu to Ramechhap Drive and Flight to Lukla, Trek to Phakding | Fly To The World's Most Adventurous Flight Lukla







<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 3</span>
Phakding to Namche Bazaar | A Historic Trading Hub

<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 4</span>
Acclimatization at Namche | Get The Best Views of The Highest Peaks

<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 5</span>
Namche to Deboche | Visit to Largest Monastery of Khumbu

<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 6</span>
Deboche to Dingboche | Welcome to Sherpa Village

<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 7</span>
Acclimatization day at Dingboche | Adore the World's Top Three Mountain Peaks



<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 8</span>
Dingboche to Lobuche | Trail to Base Camp



<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 9</span>
Lobuche to Gorakshep to Everest Base Camp and back to Gorakshep | The Ultimate Adventure Day

<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 10</span>
Hiking to Kala Patthar, Descend to Pheriche | Explore the Gigantic Views of Mt. Everest



<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 11</span>
Pheriche to Namche Bazaar | Buy Some Yak Cheese & Butter



<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 12</span>
Namche Bazaar to Lukla | The Last Hike



<br/>
<span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 13</span>
Fly back to Ramechhap and Drive back to Kathmandu | Back to the Capital City
<br/>

                                         </p>
                                      
                                         </div>
                                      </div>
                                     
                           </div>
                          
           
        </div>
    
        </div>
  )
}

export default Mount