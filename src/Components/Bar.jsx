import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { MdLocationOn,MdOutlineAccessTimeFilled } from 'react-icons/md';
import  'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import    'swiper/css/scrollbar';
const Bar = () => {
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
      <div className=' bg-bar1 min-h-screen bg-center font-Poppins bg-opacity-100 flex  bg-cover justify-center pt-[10rem] no-repeat'>
      <div className="flex flex-col gap-3 items-center">
      <h1 className="text-red-500  text-6xl items-center justify-center  font-bold"> Brahmatal Trek</h1>
      <button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
   <MdLocationOn class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdLocationOn>
     <span>Uttarakhand</span>
   </button>

<button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdOutlineAccessTimeFilled class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdOutlineAccessTimeFilled>
  <span>Duration :6 days</span>
</button>

      </div>
               </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' bg-bar2 min-h-screen bg-center font-Poppins bg-opacity-100 flex  bg-cover justify-center pt-[10rem] no-repeat'>
      <div className="flex flex-col gap-3 items-center">
      <h1 className="text-red-500  text-5xl items-center justify-center  font-bold"> Brahmatal Trek</h1>
      <button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
   <MdLocationOn class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdLocationOn>
     <span>Uttarakhand</span>
   </button>

<button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdOutlineAccessTimeFilled class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdOutlineAccessTimeFilled>
  <span>Duration :6 days</span>
</button>

      </div>
               </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' bg-bar3 min-h-screen bg-center font-Poppins bg-opacity-100 flex  bg-cover justify-center pt-[10rem] no-repeat'>
      <div className="flex flex-col gap-3 items-center">
      <h1 className="text-red-500  text-5xl items-center justify-center  font-bold"> Brahmatal Trek</h1>
      <button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
   <MdLocationOn class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdLocationOn>
     <span>Uttarakhand</span>
   </button>

<button class="  text-white text2xl bg-red-500 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <MdOutlineAccessTimeFilled class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></MdOutlineAccessTimeFilled>
  <span>Duration :6 days</span>
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
                                  <span className='text-red-600 text-xl'> 12,200 ft</span>
                                  </div>
                                  <div className='font-bold'>
                                   Gread
                                  <br />
                                  <span className='text-red-600 font-bold'>Easy to Moderate</span>
                                  </div>
                               </div>
                               <div className='font-Poppins text-black   pl-7 flex-row flex  gap-8'>
                               <div className='font-bold'>
                                   Duration 
                                  <br />
                                  <span className='text-red-600 text-xl'>6 Days</span>
                                  </div>
                                  <div className='font-bold'>
                                   Trekking Distance
                                  <br />
                                  <span className='text-red-600 font-bold'> 24km</span>
                                  </div>
                               </div>
                    </div>
           
           
                           <div className='flex flex-col gap-8 p-16'>
                            
                            <h1 className='text-3xl text-black font-Poppins'>Brahnatal Trek</h1>
                                   <div className='font-Poppins text-black   pl-7 flex-row flex  gap-8'>
                                         <div className='font-bold gap-10'>
                                         <span className="destitext pl-3 ">Kathgodam- Lohajung - Bekaltal- Brahmatal high point - Brahmatal- Lohajung- Kathgodam</span>
                                         <br />
                                         <p className="text-gray-900 pt-10 text-xl shadow-1xl shadow-gray-400 ">
                                            <h1 className='text-3xl text-black font-Poppins'> Brahmatal Trek</h1>
                                        
                                 <span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 1</span> 
                                 Drive from Rishikesh to Lohajung
                                     
                                        <br/>

                                 <span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 2</span> 
                                 Trek from Lohajung to Gujreni
                                 <br/>



                                <span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 3</span> 
                                Gujreni to Tilandi

                                 <br/>

                                     <span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 4</span> 
                                     Brahmatal to Lohajung
                                 <br/>



                                 <span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 5</span> 
                                 Drive from Lohajung to Rishikesh
                                  <br/>



                               <span className='text-bold text-red-500 underline font-Poppins pr-4'>Day 6 </span> 
                                Rishikesh – Dehradun | Goodbye to the Lofty Peaks
                                <br/>

                                         </p>
                                         </div>
                                      </div>
                                     
                           </div>
                          
           
        </div>
    
        </div>
  )
}

export default Bar