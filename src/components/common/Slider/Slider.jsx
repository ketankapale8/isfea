import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';
import { Autoplay, Pagination, Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import one from '../../../assets/backgrounds/bg46.jpg'
import two from '../../../assets/Banner2.jpg'
import three from '../../../assets/backgrounds/bg45.jpg'
import four from '../../../assets/backgrounds/bg44.jpg'



export default function DummySlider2() {
  return (
    <>
        <Swiper
        direction={'horizontal'}
        spaceBetween={30}
        centeredSlides={true}
        mousewheel={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Mousewheel,Keyboard, Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='main'>
           <div>
            <div className='title'>
                <h2>Unlocking Milestones </h2>
                <h2>Achieving Capabilities.</h2>
            </div>

            <div className='desc'>

            {/* <p >
            Accelerating business growth through digital transformation, 
            </p>
                      <p  >
                      optimizing operations and unlocking innovation. 
                      </p> */}
            </div>
            <img src={one} className='bannerImg'/>
           
           </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='main'>
        <div className='title'>
                <h2>Achieving New Heights</h2>
                <h2 >Making Breakthroughs.</h2>

            </div>

            <div className='desc'>

            {/* <p >
            Unlocking Excellence in the Digital Realm: 
            </p>
                      <p  >
                      Elevate Your Quality Assurance
                      </p> */}
            </div>

        <img src={two} />
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='main'>

<img src={three} />

<div className='title'>
        <h2>Competing for  </h2>
        <h2 > a common goal.</h2>

    </div>

    <div className='desc'>

    {/* <p >
    Bridging Dreams, Building Futures
    </p>
              <p  >
              Connecting for a Brighter Tomorrow
              </p> */}
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='main'>
        <div className='title'>
                <h2>Quenching your </h2>
                <h2 >Milestone.</h2>

            </div>

            <div className='desc'>

        
            </div>


        <img src={four} />

        </div> 
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}
