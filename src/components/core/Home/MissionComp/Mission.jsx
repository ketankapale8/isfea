import React from 'react';
import './mission.scss';
import One from '../../../../assets/mission/1.jpg'
import Two from '../../../../assets/mission/2.jpg'
import Three from '../../../../assets/mission/3.jpg'
import Four from '../../../../assets/mission/4.jpg'
import Five from '../../../../assets/mission/5.jpg'
import Six from '../../../../assets/mission/6.jpg'
import Seven from '../../../../assets/mission/7.jpg';
import Eleven from '../../../../assets/mission/11.jpg'
import Twelve from '../../../../assets/mission/12.jpg'
import Ten from '../../../../assets/mission/10.jpg'
import Thirteen from '../../../../assets/mission/13.jpg';
import Fourteen from '../../../../assets/mission/Mission.jpg'
import Fifteen from '../../../../assets/mission/Vision1.jpg'
import Sixteen from '../../../../assets/mission/UpcomingEvents.jpg'
import Seventeen from '../../../../assets/mission/17.jpg';




import bgRem from '../../../../assets/mission/bgRem.png'
import bgRem1 from '../../../../assets/mission/bgRem1.png'
import bgRem2 from '../../../../assets/mission/bgRem2.png'

import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';


export const Mission = () => {
  const missionArr = [
    {
      title : "Our Mission",
      img : Fourteen,
      color : "black",
      href : "/values",

      desc : "At ISFEA, our mission is to empower individuals to achieve excellence in both sports and education. We are dedicated to creating a harmonious alliance between the world of sports and the realm of education.",
      detailPage : [
        {
          detailPageTitle : "Mission",
          image : Fourteen,
          para1 : "The mission of the International Sports Federation Education Alliances (ISFEA) is to foster global cooperation and collaboration in the field of sports education. Our primary objective is to promote excellence in sports education and training by facilitating partnerships and knowledge exchange among sports federations, institutions, and educators worldwide. We aim to create a unified platform where best practices, research, and innovations in sports education can be shared, leading to the development of highly skilled athletes, coaches, and administrators who uphold the values of fair play, integrity, and inclusivity. Through ISFEA, we strive to empower individuals and organizations with the tools and resources needed to advance the quality of sports education, thereby contributing to the overall growth and positive impact of the sporting community at the international level.",
          para2 : "ISFEA is committed to ensuring that sports education remains accessible and inclusive to all, regardless of age, gender, or background. We are dedicated to advancing research, promoting sustainable development, and fostering global understanding in the field of sports education. Our mission is rooted in the belief that by forging strong partnerships and sharing knowledge, we can enhance the educational experience for athletes, coaches, and sports enthusiasts worldwide, thereby contributing to the holistic development of individuals and communities through the power of sports. Together, we aim to create a brighter future for the world of sports, where education is at the heart of athletic achievement and where the values of teamwork, respect, and lifelong learning are upheld as essential elements of the sporting journey."
        }
      ]
    },
    {
      title : "Vision",
      img : Fifteen,
      color : "black",
      href : "/values",

      desc : "ISFEA envisions a world where sports and education are seamlessly integrated, creating a balanced and enriching environment for individuals to thrive. Our vision is to be the global leader in fostering a partnership between sports and education that empowers athletes to excel. ",
      detailPage : [
        {
          detailPageTitle : "Vision",
          image : Fifteen,
          para1 : "The vision of the International Sports Federation Education Alliances (ISFEA) is to become a globally recognized leader in advancing sports education for the betterment of athletes, coaches, and the entire sporting community. We envision a world where sports education is an integral part of every athlete's journey, fostering not only exceptional athletic performance but also personal growth and character development. ISFEA aspires to create a network of interconnected sports federations, educational institutions, and organizations that collaboratively design and implement cutting-edge educational programs, ensuring that athletes have access to the best education, training, and resources that empower them to excel in their chosen sports and in life.",
          para2 : "In this vision, ISFEA envisions an inclusive and diverse sports education landscape that transcends borders and barriers, where athletes of all backgrounds have equal opportunities to develop their skills and pursue their sporting dreams. Through our global partnerships and collaborative initiatives, we aim to create a future where sports education is a driving force for social and cultural cohesion, helping build bridges between communities and nations. ISFEA is committed to promoting lifelong learning and fostering a culture of excellence, integrity, and fairness in sports, ultimately contributing to a more enlightened, harmonious, and sports-loving world."
        }
      ]
    },
    {
      title : "Our Values",
      img : Sixteen,
      color : "black",
      href : "/values1",
      desc : "At the International Sports Federation for Education Alliances (ISFEA), our values are the cornerstone of our mission. We are dedicated to promoting excellence and inclusivity by seamlessly integrating sports and education, empowering individuals to achieve their full potential while upholding the highest standards of integrity. ",
      detailPage : [
        {
          detailPageTitle : "Values",
          image : Sixteen,
          para1 : "At ISFEA, we are guided by a set of values that define our commitment to the advancement of sports education and the betterment of the global sporting community. ",
          p2title : "",
          p3title : "",
          p4title : "",
          p5title : "",
          p6title : "",
          para2 : ": Ensuring that sports education programs and initiatives are of the highest quality and efficacy. Our vision for creating a premiere network of agencies and federations for the betterment of sports education across the world, is underpinned by our relentless focus on excellence in the development of athletes, coaches, and sports administration.",
          para3 : ": Promoting honesty, transparency, and ethical conduct. We are committed to fostering an environment where sports education is rooted in trust, fairness, and moral principles.",
          para4 : ": Providing equal opportunities in sports education for individuals of all backgrounds, regardless of their age, gender, race, or socioeconomic status. We believe that improving access  for all, to the world of sports, is the only way to create a vibrant and globally inclusive sports culture. ",
          para5 : ": Empowering your journey by making continuous learning a cornerstone of your personal and professional growth in the sporting community. Our commitment to the ongoing development of athletes, coaches, and administrators allows us to foster a community of informed and empowered individuals.",
          para6 : ": Achieving success together. We recognize the power of working together with federations, educational institutions, and other key constituents in the sporting community. We can elevate the standard of sports education on a global scale by coming together to innovate and facilitate the exchange of ideas and knowledge."


        }
      ]
    }
  ]
  return (
    <div className='mission'>
        <div className="missionContainer">
          <div className="boxesContainer"
            initial={{x : -200}}
            animate={{x : -10}}
            transition={{ delay :0.3 , duration : 1 }}
          >
          {missionArr.map((item,idx)=>{
            return (
              <div className='boxes' key={idx}>
                <div className="top">
                  <img className='missionImg' src={item.img} alt='missionImgs'/>
                </div>
                <div className="bottom">
                  <div className="title">{item.title}</div>
                  <p className="desc">{item.desc.slice(0,220)+ '...'}</p>
                  <div className="buttonContainer">
                    <Link style={{color:'inherit', textDecoration:'none'}} to={`${item.href}`} state={{data:  item.detailPage}}>
                      <button className='readmoreBtn' style={{backgroundColor:`${item.color}`}}>Read More..</button>
                    
                    </Link>

                  </div>
                </div>

              </div>
            )
          })}

          </div>
        </div>
    </div>
  )
}
