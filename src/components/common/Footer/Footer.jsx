import React from 'react'
import './footer.scss';
import logo from '../../../assets/ifseaneww.png'
import six from '../../../assets/footer/6.png';
import seven from '../../../assets/footer/7.png';
import eight from '../../../assets/footer/8.png';
import nine from '../../../assets/footer/9.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerContainer">
        <div className="left">
            <img src={logo} alt="logoFooter" className='logoImg'/>
        </div>
        <div className="middle">
          <h3>About Us</h3>
          <h3>News</h3>
          <h3>Organization</h3>
          <h3>News & Media</h3>
          <h3>Privacy Policy</h3>
        </div>
        
        <div className="right">
        <div className="footerHeading">
                       Social Network
                    </div>
                    <div className="footerDesc">
                        <img className='icons' src={six}/>
                        <img className='icons' src={seven}/>
                        <img className='icons' src={eight}/>
                        <img className='icons' src={nine}/>


                    </div>
        </div>

      </div>
      <div className="bottomStrip">
        <h3 className='btms'>info@isfea.org</h3>
        <h3 className='btms'>ISFEA</h3>
        <h3 className='btms'>© 2023 | All Rights Reserved</h3>

      </div>
    </div>
  )
}

export default Footer