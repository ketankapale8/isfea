import React from 'react';
import './valuesdesccommon.scss';
import {motion} from 'framer-motion';
// import {useInView} from 'react-intersection-observer'

let para2 = <strong>Excellence</strong> + ": "
        //   para3 : "Integrity: ",
        //   para4 : "Inclusivity: Providing equal opportunities in sports education for individuals of all backgrounds, regardless of their age, gender, race, or socioeconomic status. We believe that improving access  for all, to the world of sports, is the only way to create a vibrant and globally inclusive sports culture. ",
        //   para5 : "Lifelong Learning: Empowering your journey by making continuous learning a cornerstone of your personal and professional growth in the sporting community. Our commitment to the ongoing development of athletes, coaches, and administrators allows us to foster a community of informed and empowered individuals.",
        //   para6 : "Collaboration: Achieving success together. We recognize the power of working together with federations, educational institutions, and other key constituents in the sporting community. We can elevate the standard of sports education on a global scale by coming together to innovate and facilitate the exchange of ideas and knowledge."


const ValuesDescCommon = ({detailPageTitle , para1 , 
  image , para2 , para3 , para4 , 
  para5 , para6,
  p2title

  

}) => {

  
  return (
    <div className='homedesccommon'
    initial={{x : -200}}
    animate={{x : -10}}
    transition={{ delay :0.3 , duration : 1 , type:'spring' , stiffness : 120}}
    
    >
        <div className="homeLeftDescContainer">
            <div className="left">
                <img src={image} alt="" className='imgContainer'/>
            </div>

            <div className="right">
                {/* <motion.div whileHover={{scale:1.1 , originX: 0, color:'#0d6efd'}}
                  transition={{type:'string', stiffness: 300}}
                className="title">{detailPageTitle}</motion.div> */}
                <div className="descContainer">
                <p className="desc">{para1}</p>
                <p className="desc"><strong>Excellence</strong> {para2}</p>
                <p className="desc"><strong>Integrity</strong>{para3}</p>
                <p className="desc"><strong>Inclusivity</strong>{para4}</p>
                <p className="desc"><strong>Lifelong Learning</strong>{para5}</p>
                <p className="desc"><strong>Collaboration</strong>{para6}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ValuesDescCommon