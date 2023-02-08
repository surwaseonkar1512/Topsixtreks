import React from 'react'
import { MdLocationOn,MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import  'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import    'swiper/css/scrollbar';
import map from "../assets/anpmap.png";
const Anpurna = () => {
  return (
    <div>
    <div className='p-[1px] w-[100%] h-[90vh] overflow-hidden bg-fixed  bg-black '>
    
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
      <div className=' bg-An1 min-h-screen bg-center font-Poppins bg-opacity-100 flex  bg-cover justify-center pt-[10rem] no-repeat'>
      <div className="flex flex-col gap-3 items-center">
      <h1 className="text-red-500 text-6xl items-center justify-center  font-bold"> Annapurna Base Camp</h1>
      <button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
   <MdLocationOn class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdLocationOn>
     <span>Nepal</span>
   </button>
<button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdOutlineAccessTimeFilled class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdOutlineAccessTimeFilled>
  <span>Duration :9 days</span>
</button>
<img className='pt-[-30px]' src={map} width={500} height={500}/>
</div>
               </div>
      </SwiperSlide>
      
      <SwiperSlide className=''>
      <div className=' bg-An min-h-screen bg-center font-Poppins bg-opacity-100 flex  bg-cover justify-center pt-[10rem] no-repeat'>
      <div className="flex flex-col gap-3 items-center">
      <h1 className="text-red-500 text-6xl items-center justify-center  font-bold"> Annapurna Base Camp</h1>
      <button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
   <MdLocationOn class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdLocationOn>
     <span>Nepal</span>
   </button>
<button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdOutlineAccessTimeFilled class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdOutlineAccessTimeFilled>
  <span>Duration :9 days</span>
</button>

</div>
               </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' bg-Anm min-h-screen bg-center font-Poppins bg-opacity-100 flex  bg-cover justify-center pt-[10rem] no-repeat'>
      <div className="flex flex-col gap-3 items-center">
      <h1 className="text-red-500 text-6xl items-center justify-center  font-bold"> Annapurna Base Camp</h1>
      <button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
   <MdLocationOn class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdLocationOn>
     <span>Nepal</span>
   </button>
<button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdOutlineAccessTimeFilled class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdOutlineAccessTimeFilled>
  <span>Duration :9 days</span>
</button>
</div>

               </div>
      </SwiperSlide>
      
      
    
    </Swiper>
    <div>
    </div>
    </div>
    
    
                                         <br/>
                                         <div className=' h-auto  bg-gradient-to-r from-pink-300 to-cyan-500 w-full  flex  flex-col  gap-10 lg:flex-row'>
                    <div className='flex flex-col gap-8 p-16'>
                    <h1 className='text-3xl text-black font-Poppins text-bold'>INFO</h1>
                             <div className='font-Poppins text-black   pl-7 flex-row flex  gap-8'>
                          
                                  <div className='font-bold'>
                                   Max Altitude
                                  <br />
                                  <span className='text-red-600 text-xl'> 13,500 ft</span>
                                  </div>
                                  <div className='font-bold'>
                                   Gread
                                  <br />
                                  <span className='text-red-600 font-bold'>Moderate to Diffecult</span>
                                  </div>
                               </div>
                               <div className='font-Poppins text-black   pl-7 flex-row flex  gap-8'>
                               <div className='font-bold'>
                                   Duration 
                                  <br />
                                  <span className='text-red-600 text-xl'>9 Days</span>
                                  </div>
                                  <div className='font-bold'>
                                   Trekking Distance
                                  <br />
                                  <span className='text-red-600 font-bold'> 70km</span>
                                  </div>
                               </div>
                    </div>
           
           
                           <div className='flex flex-col gap-8 p-16'>
                            
                            <h1 className='text-3xl text-black font-Poppins'>Circuit Trek</h1>
                                   <div className='font-Poppins text-black   pl-7 flex-row flex  gap-8'>
                                         <div className='font-bold gap-10'>
                                         <span className="destitext pl-3 "> Kathmandu-Ngadi-Chamje -Dharapani -Chame-Pisang -Manang -Manang -Yak Kharka -Phedi  -Muktinath -Jomsom  -Pokhara
 </span>
                                         <br />
                                         <p className="text-gray-900 pt-10 text-xl shadow-1xl shadow-gray-400 ">
                                            <h1 className='text-3xl text-black font-Poppins'>Annapurna Base Camp Trek</h1>
                                            The Annapurna base camp trek is one of the most popular treks in the world.
                                             It literally brings you face to face with an eight-thousander
                                              – for a moderate-difficult trek, this is incredible! 
                                              The fascinating Annapurna massif includes the world’s tenth highest peak. 
                                              Annapurna I (8,091 m) holds an almost fatal attraction for mountaineers.
                                             It has the highest fatality ratio among the eight-thousanders. 
                                         </p>
                                         </div>
                                      </div>
                                     
                           </div>
                          
           
        </div>
    
        </div>
  )
}

export default Anpurna