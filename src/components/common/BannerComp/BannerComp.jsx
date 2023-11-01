import React from 'react';
import './banner.scss';
import BannerImg from '../../../assets/Banner1.jpg'


const BannerComp = ({img , title}) => {
  return (
    <div className='banner'>
        <div className="bannerContainer">
            <div className="left">
                <h3>{title}</h3>
            </div>
            <div className="right">
              <img src={img} alt="bannerImg" className='bannerImg'/>

            </div>
        </div>
    </div>
  )
}

export default BannerComp