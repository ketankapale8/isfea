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
import Fourteen from '../../../../assets/mission/14.jpeg'
import Fifteen from '../../../../assets/mission/15.jpeg'
import Sixteen from '../../../../assets/mission/16.jpg'
import Seventeen from '../../../../assets/mission/17.jpg'



import bgRem from '../../../../assets/mission/bgRem.png'
import bgRem1 from '../../../../assets/mission/bgRem1.png'
import bgRem2 from '../../../../assets/mission/bgRem2.png'

import {motion} from 'framer-motion'


export const Mission = () => {
  const missionArr = [
    {
      title : "Our Mission",
      img : Fourteen,
      color : "#ee334e",
      desc : "At ISFEA, our mission is to empower individuals to achieve excellence in both sports and education. We are dedicated to creating a harmonious alliance between the world of sports and the realm of education. Through collaborative partnerships, scholarships, and advocacy, we strive to nurture well-rounded athletes who are not only champions in their chosen sports but also empowered, educated individuals ready to make a positive impact on society"
    },
    {
      title : "Vision",
      img : Seventeen,
      color : "#fcb131",
      desc : "ISFEA envisions a world where sports and education are seamlessly integrated, creating a balanced and enriching environment for individuals to thrive. Our vision is to be the global leader in fostering a partnership between sports and education that empowers athletes to excel not only in their chosen disciplines but also as well-rounded, responsible citizens. We aspire to transform lives by championing the pursuit of athletic and academic excellence, ensuring that every individual, regardless of their background, has the opportunity to reach their full potential, both on the field and in the classroom."
    },
    {
      title : "Our Values",
      img : Fifteen,
      color : "#0081cb",
      desc : "At the International Sports Federation for Education Alliances (ISFEA), our values are the cornerstone of our mission. We are dedicated to promoting excellence and inclusivity by seamlessly integrating sports and education, empowering individuals to achieve their full potential while upholding the highest standards of integrity. Through collaboration and advocacy, we work to create a world where lifelong learning and personal growth are at the heart of every athlete's journey."
    }
  ]
  return (
    <div className='mission'>
        <div className="missionContainer">
          <motion.div className="boxesContainer"
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
                  <p className="desc">{item.desc.slice(0,260)+ '....'}</p>
                  <button style={{backgroundColor:`${item.color}`}}>Read More</button>
                </div>

              </div>
            )
          })}

          </motion.div>
        </div>
    </div>
  )
}
