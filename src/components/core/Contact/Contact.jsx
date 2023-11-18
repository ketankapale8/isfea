import React from 'react';
import './contact.scss';
import img from '../../../assets/contactus/2.jpeg'
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg1.png';
import {motion} from 'framer-motion';
import NewsLetter from '../../common/Newsletter/NewsLetter';

// import BannerComp1 from '../../common/BannerComp1/BannerComp';
const Contact = () => {
  return (
    <div className="contact">
      <BannerComp img={BannerImg} title={"Contact Us"}/>

    <div className='contactleft'>
        <div className="contactLeftContainer">
            <motion.div className="left"
              initial={{x : -200}}
              animate={{x : -10}}
              transition={{ delay :0.3 , duration : 1 , type:'spring' , stiffness : 120}}
            >
                <img src={img} alt="" className='imgContainer'/>
            </motion.div>

            <motion.div className="right"
               initial={{x : 200}}
               animate={{x : -10}}
               transition={{ delay :0.3 , duration : 1 , type:'spring' , stiffness : 120}}
            >
             <div className="rightContainer">
              <div className="items">
              <h2>Name:</h2>
              <input placeholder='Enter your name' />

              </div>
          
              <div className="items">
              <h2>Email:</h2>
              <input placeholder='Enter your email' />

              </div>
              <div className="items">
              <h2>Subject:</h2>
              <input placeholder='Enter your subject' />

              </div>

              <div className="items">
              <h2>Query:</h2>
              <textarea placeholder='Enter your query' />

              </div>

              <button className='btn'>Submit</button>


             </div>

            </motion.div>
        </div>
    </div>
    <NewsLetter/>
    </div>
  )
}

export default Contact