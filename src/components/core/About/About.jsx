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
{/*      
       <HomeLeft 
       title={"Global Partnerships"} desc={"At the International Sports Federation Education Alliances (ISFEA), we recognize the transformative power of global partnerships in advancing sports education on a worldwide scale. Our commitment to forging these partnerships is at the heart of our mission. We seek to collaborate with international sports federations, educational institutions, governmental bodies, and non-profit organizations to create a seamless network of expertise and resources that transcends geographical boundaries. Through strategic alliances, we aim to pool our collective knowledge, experience, and resources to develop innovative sports education programs, facilitate research initiatives, and promote best practices that benefit athletes, coaches, and sports administrators across the globe. "}
       img={One}
       desc1={" These collaborations amplify our collective impact, creating a network of support for our initiatives."}/> */}

      {/* <HomeRight
      title={"Community Engagement"}
      desc={" Community engagement is a vital pillar of the International Sports Federation Education Alliances (ISFEA) as we believe in the transformative power of sports education at the grassroots level. We are committed to actively engaging with local communities, schools, and sports clubs to promote the values of sportsmanship, teamwork, and personal development. Through our community engagement initiatives, we seek to bring the benefits of sports education to individuals of all ages, fostering a deep appreciation for physical activity and healthy living. ISFEA collaborates with local organizations and volunteers to organize sports clinics, coaching workshops, and educational programs that empower communities to harness the positive impact of sports, promoting physical well-being and personal growth."}
        img={Two}
        desc1={"We invest in research and data analysis to better understand the profound effects of sports on education and personal development. Through innovation, we continuously evolve our programs to maximize their effectiveness."}
      /> */}
{/* 
      <HomeLeft 
       title={"Overall Sports Development"} desc={"At the International Sports Federation Education Alliances (ISFEA), our commitment to overall sports development encompasses a holistic approach to nurturing athletic talent, enhancing coaching excellence, and promoting sports administration proficiency. We believe that a well-rounded sports ecosystem is essential for the growth of the sporting community, and we strive to contribute to this by offering comprehensive support and resources. Through our initiatives, we aim to develop high-caliber athletes by providing access to top-tier sports education, training, and mentorship, enabling them to excel in their chosen disciplines. Moreover, we are dedicated to empowering coaches with cutting-edge knowledge and methodologies, ensuring they can provide the best guidance and support to athletes, thereby elevating the quality of coaching in the sports industry. "}
       img={Three}
       desc1={"ISFEA also recognizes the significance of effective sports administration in the success and sustainability of sports organizations. We work to equip sports administrators with the necessary skills, tools, and resources to manage sports programs, events, and institutions efficiently. By focusing on sports administration, we aim to enhance the overall management of sports activities, which is essential for the growth, sustainability, and ethical governance of the sports industry."}/> */}
       <FAQ/>
       <Regulations/>
       <NewsLetter/>
    </div>
    
  )
}

export default About