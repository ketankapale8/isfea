import React from 'react';
import './missiondesccommon.scss';
import {motion} from 'framer-motion';
// import {useInView} from 'react-intersection-observer'


const MissionDescCommon = ({detailPageTitle , para1 , image , para2 , para3 , para4 , para5 , para6}) => {
  
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
                <p className="desc">{para2}</p>
                <p className="desc">{para3}</p>
                <p className="desc">{para4}</p>
                <p className="desc">{para5}</p>
                <p className="desc">{para6}</p>



                </div>

            </div>
        </div>
    </div>
  )
}

export default MissionDescCommon