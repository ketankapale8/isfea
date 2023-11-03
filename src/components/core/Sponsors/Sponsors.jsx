import React from 'react';
import './sponsors.scss';
import One from '../../../assets/sponsors/1.png';
import Two from '../../../assets/sponsors/2.png';
import Three from '../../../assets/sponsors/3.png';
import Four from '../../../assets/sponsors/4.png';
import Five from '../../../assets/sponsors/5.png';
import Six from '../../../assets/sponsors/6.png';
import Seven from '../../../assets/sponsors/7.png';


const Sponsors = ({title}) => {
  return (
    <>
      <div className="slider">

        <div className='SponsorTitle'>{title}</div>
  <div className="slide-track">
    <div className="slide">
      <img src={One} alt="asas"/>
    </div>
    <div className="slide">
      <img src={Two} alt=""/>
    </div>
    <div className="slide">
      <img src={Three} alt=""/>
    </div>
    <div className="slide">
      <img src={Four} alt=""/>
    </div>
    <div className="slide">
      <img src={Five} alt=""/>
    </div>
    <div className="slide">
      <img src={Six} alt=""/>
    </div>
    <div className="slide">
      <img src={Seven} alt=""/>
    </div>

    <div className="slide">
      <img src={One} alt="asas"/>
    </div>
    <div className="slide">
      <img src={Two} alt=""/>
    </div>
    <div className="slide">
      <img src={Three} alt=""/>
    </div>
    <div className="slide">
      <img src={Four} alt=""/>
    </div>
    <div className="slide">
      <img src={Five} alt=""/>
    </div>
    <div className="slide">
      <img src={Six} alt=""/>
    </div>
    <div className="slide">
      <img src={Seven} alt=""/>
    </div>

    <div className="slide">
      <img src={Two} alt=""/>
    </div>
    <div className="slide">
      <img src={Three} alt=""/>
    </div>
    <div className="slide">
      <img src={Four} alt=""/>
    </div>
    <div className="slide">
      <img src={Five} alt=""/>
    </div>
   
  </div>
</div>
    </>
  )
}

export default Sponsors