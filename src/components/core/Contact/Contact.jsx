import React from 'react';
import './contact.scss';
import img from '../../../assets/contactus/2.jpeg'
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg1.png'
// import BannerComp1 from '../../common/BannerComp1/BannerComp';
const Contact = () => {
  return (
    <div className="contact">
      <BannerComp img={BannerImg} title={"Contact"}/>

    <div className='contactleft'>
        <div className="contactLeftContainer">
            <div className="left">
                <img src={img} alt="" className='imgContainer'/>
            </div>

            <div className="right">
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
              <h2>Subject:</h2>
              <textarea placeholder='Enter your query' />

              </div>

              <button className='btn'>Submit</button>


             </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact