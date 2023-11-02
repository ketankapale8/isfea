import React from 'react';
import './homeleft.scss';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer'


const HomeLeft = ({title , desc , img , desc1}) => {
  
  return (
    <motion.div className='homeleft1'
    initial={{x : -200}}
    animate={{x : -10}}
    transition={{ delay :0.3 , duration : 1 , type:'spring' , stiffness : 120}}
    
    >
        <div className="homeLeftContainer">
            <div className="left">
                <img src={img} alt="" className='imgContainer'/>
            </div>

            <div className="right">
                <motion.div whileHover={{scale:1.1 , originX: 0, color:'#0d6efd'}}
                  transition={{type:'string', stiffness: 300}}
                className="title">{title}</motion.div>
                <p className="desc">{desc}</p>
                <p className="desc">{desc1}</p>

            </div>
        </div>
    </motion.div>
  )
}

export default HomeLeft