import React from 'react';
import './aboutleftcustom.scss'
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Two from '../../../assets/aboutus/4.jpg';

let customLeftArr = [
    {
        desc : " The International Sports Federation for Education Alliances (ISFEA) is a platform where institutions and agencies across the world can unite to build innovative ecosystems for developing athletes, coaches, and administrators. We are committed to growing a network of interconnected sports federations, educational institutions, and organizations that can collaboratively design and implement cutting-edge educational programs and practices.",
        subdesc : "ISFEA  is committed to achieving its vision through the following initiatives:",
        img : Two,
        uls : [
            {

                desc1: "Embrace a progressive and inclusive view of global sporting disciplines by fostering genuine collaboration of students, researchers and institutions and overcoming restrictions of national boundaries" , 
                desc2 : "Addressing growing needs for lifelong learning across the sports industry, including education of instructors, coaches and administrators in addition to athletes",
                desc3 : "Partner with local governments and sports authorities to promote social, environmental and economic benefits of building a sports ecosystem. ",
                desc4 : "Work with sports fitness and medicine professionals to increase availability and promote natural health across the industry.",
                desc5: "Enhance the usage of analytics to develop industry insight for continued relevance of ISFEA events across its segments and to build relevant communities.",
                desc6: 'Build a global community of professionals in the sports education '
            }
        ]

    }
]
const Aboutleftcustom = () => {
  
  return (
    <div className='homeleftCustom'
    initial={{x : -200}}
    animate={{x : -10}}
    transition={{ delay :0.3 , duration : 1 , type:'spring' , stiffness : 120}}
    
    >{
        customLeftArr.map(item=>{
            return (

                <div className="homeLeftContainer">
                    <div className="left">
                        <img src={item.img} alt="" className='imgContainer'/>
                    </div>

                    <div className="right">
                        {/* <motion.div whileHover={{scale:1.1 , originX: 0, color:'#0d6efd'}}
                        transition={{type:'string', stiffness: 300}}
                        className="title">{title}</motion.div> */}
                        <p className="desc">{item.desc}</p>
                        <p className="desc">{item.subdesc}</p>
                        {item.uls.map(ul=>{
                            return (
                                <>
                                    <ul>
                                        <li className='desc'>{ul.desc1}</li>
                                        <li className='desc'>{ul.desc2}</li>
                                        <li className='desc'>{ul.desc3}</li>
                                        <li className='desc'>{ul.desc4}</li>
                                        <li className='desc'>{ul.desc5}</li>
                                        <li className='desc'>{ul.desc6}</li>

                                    </ul>
                                </>
                            )
                        })}

                    </div>
                </div>

            )
        })
    }
    </div>
  )
}

export default Aboutleftcustom