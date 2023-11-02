import React from 'react';
import './homeright.scss'
import {motion} from 'framer-motion'


const HomeRight = ({title , desc , img , desc1}) => {
  return (
    <motion.div className='homeleft'
    initial={{x : 200}}
    animate={{x : -10}}
    transition={{ delay :0.3 , duration : 1 , type:'spring' , stiffness : 120}}
    >
          <div className="homeLeftContainer">
              <div className="right">
              <motion.div 
              
              whileHover={{scale:1.1 , originX: 0, color:'#0d6efd'}}
                transition={{type:'string', stiffness: 300}}
              className="title">{title}</motion.div>
                  <p className="desc">{desc}</p>
                  <p className="desc">{desc1}</p>

              </div>
              <div className="left">
                  <img src={img} alt="" className='imgContainer'/>
              </div>

          </div>

    </motion.div>
  )
}

export default HomeRight