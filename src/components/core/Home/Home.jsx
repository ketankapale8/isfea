import React from 'react';
import './home.scss'
import BannerComp from '../../common/BannerComp/BannerComp';
import HomeLeft from '../../common/HomeLeft/HomeLeft';
import HomeLeftImg1 from '../../../assets/homeleft.jpg'
import HomeRight from '../../common/HomeRight/HomeRight';
import HomeRightImg1 from '../../../assets/HomeRight.jpg';
import HomeLeftImg2 from '../../../assets/homeleft1.jpg';
import { Mission } from './MissionComp/Mission';
import BannerImg from '../../../assets/Banner3.jpg'
import Sponsors from '../Sponsors/Sponsors';
import BannerImgNew from '../../../assets/backgrounds/bg21.jpeg'

import One from '../../../assets/newassets/1.jpeg'
import Two from '../../../assets/newassets/6.jpg'
import Three from '../../../assets/newassets/7.jpg'
import DummySlider2 from '../../common/Slider/Slider';
import Counter from '../../common/Counter/Counter';
import Slideshow from '../../common/newSlider/NewSlider';
// import MapComp from '../../common/MapComp/MapComp';



const Home = () => {
  return (
    <div className='home'>
      <Slideshow/>
      {/* <DummySlider2/> */}
      {/* <BannerComp img={BannerImgNew}/> */}
      <HomeLeft 
       title={"Promoting Athletic and Academic Excellence"} desc={"ISFEA envisions a world where sports and education are seamlessly intertwined, ensuring that individuals not only excel in their chosen sports but also receive a well-rounded education"}
       img={One}
       desc1={"Through its programs, ISFEA exemplifies the belief that true excellence lies not only in athletic achievement but in the synergy of physical prowess and intellectual growth, providing a pathway for the next generation of athletes to become leaders in their chosen fields and society as a whole."}
       />
       {/* desc1={" ISFEA encourages the pursuit of excellence in both sports and education, emphasizing the value of education alongside sports achievements."}/> */}

      <HomeRight
      title={"Facilitating Scholarships and Opportunities"}
      desc={"The organization actively works to provide educational scholarships and opportunities for athletes to pursue higher education while pursuing their athletic dreams."}
      desc1={"ISFEA acts as a bridge between international sports federations and educational institutions. It collaborates with sports organizations, schools, universities, and colleges to create a symbiotic relationship that benefits both athletes and the educational community."}
        img={Three}
      />
    <HomeLeft 
       title={"Youth Development Programs"} desc={"The International Sports Federation for Education Alliances plays a crucial role in ensuring that individuals pursuing sports are not left behind in their educational pursuits. By creating partnerships between sports federations and educational institutions, providing scholarships, and advocating for balanced development, ISFEA is making significant strides in its mission to harmonize sports and education"}
       img={Two}
       desc1={"In doing so, it is creating a world where athletes are not just champions in their respective sports but also well-educated, responsible individuals prepared for success in all aspects of life."}/>


       <Mission/>
       {/* <MapComp/> */}
       {/* <Sponsors title={"Our Sponsors"}/> */}
       <Counter/>
    </div>
    
  )
}

export default Home