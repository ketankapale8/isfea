import React from 'react';
import './about.scss';
import One from '../../../assets/aboutus/3.jpg'
import Two from '../../../assets/aboutus/4.jpg';
import HomeLeft from '../../common/HomeLeft/HomeLeft';
import HomeRight from '../../common/HomeRight/HomeRight';
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg2.png'
// import BannerComp1 from '../../common/BannerComp1/BannerComp';


const About = () => {
  return (
    <div className='about'>
      <BannerComp img={BannerImg} title={"About Us"}/>
      {/* <div className="aboutTitle" style={{paddingLeft:'45%' , fontSize:'1.3rem', fontWeight:'bold', paddingTop:'30px', paddingBottom:'30px'}}>
        About ISFEA
      </div> */}
       <HomeLeft 
       title={"Global Partnerships"} desc={"Our organization actively seeks and nurtures partnerships with educational institutions, sports associations, and community organizations around the world. "}
       img={One}
       desc1={" These collaborations amplify our collective impact, creating a network of support for our initiatives."}/>

      <HomeRight
      title={"Community Engagement"}
      desc={" ISFEA is deeply committed to engaging with local communities. We believe that sports have the power to foster unity, create positive role models, and improve the quality of life. Our grassroots initiatives reach the hearts and minds of people where it matters most."}
        img={Two}
        desc1={"We invest in research and data analysis to better understand the profound effects of sports on education and personal development. Through innovation, we continuously evolve our programs to maximize their effectiveness."}
      />
    </div>
  )
}

export default About