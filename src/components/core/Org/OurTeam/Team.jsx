import React from 'react';
import './team.scss';
import One from '../../../../assets/teamMembers/1.jpg'
import Two from '../../../../assets/teamMembers/2.jpg'
import Three from '../../../../assets/teamMembers/3.jpeg'
import Four from '../../../../assets/teamMembers/4.jpg'
import Five from '../../../../assets/teamMembers/5.jpg';
import {motion} from 'framer-motion'



const Team = ({title , teamArr}) => {

    
  return (
    <div className='team'>
        <div className="teamContainer">
            <div className="title">{title}</div>
            <div className="teamArr">
                {teamArr.map((item, idx)=>{
                    return (
                        <>
                        <motion.div className="teamMemberBox" key={idx}
                            whileHover={{ scale : 1.1 , originX: 0}}
                        >
                            <img 
                                
                            src={item.img} alt="" className='teamMemberImg' />
                            <div className="desc">
                            <motion.h3
                                whileHover={{scale:1.05 , originX: 0, color:'#0d6efd'}}
                                transition={{type:'string', stiffness: 300}}
                            className="teamMemberTitle">{item.title}</motion.h3>
                            <p className='position'>{item.position}</p>
                            <p className='position'>{item.location}</p>


                            </div>
                        </motion.div>
                        
                        </>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Team