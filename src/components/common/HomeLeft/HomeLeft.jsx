import React from 'react';
import './homeleft.scss'

const HomeLeft = ({title , desc , img , desc1}) => {
  return (
    <div className='homeleft1'>
        <div className="homeLeftContainer">
            <div className="left">
                <img src={img} alt="" className='imgContainer'/>
            </div>

            <div className="right">
                <div className="title">{title}</div>
                <p className="desc">{desc}</p>
                <p className="desc">{desc1}</p>

            </div>
        </div>
    </div>
  )
}

export default HomeLeft