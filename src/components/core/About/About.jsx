import React from 'react';
import './about.scss';
import One from '../../../assets/aboutus/3.jpg'
import Two from '../../../assets/aboutus/4.jpg';
import Three from '../../../assets/aboutus/5.jpg';

import HomeLeft from '../../common/HomeLeft/HomeLeft';
import HomeRight from '../../common/HomeRight/HomeRight';
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg2.png'
import Regulations from './Regulations/Regulations';
import FAQ from '../../common/FAQ/FAQ';
import Aboutleftcustom from '../../common/AboutLeftCustom/AboutLeftCustom';
import NewsLetter from '../../common/Newsletter/NewsLetter';
// import BannerComp1 from '../../common/BannerComp1/BannerComp';


const About = () => {
  return (
    <div className='about'>
      <BannerComp img={BannerImg} title={"About Us"}/>
      <Aboutleftcustom/>

       <FAQ/>
       <Regulations/>
       <NewsLetter/>
    </div>
    
  )
}

export default About