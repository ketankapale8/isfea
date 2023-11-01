import React from 'react';
import './homeright.scss'

const HomeRight = ({title , desc , img , desc1}) => {
  return (
    <div className='homeleft'>
          <div className="homeLeftContainer">
              <div className="right">
                  <div className="title">{title}</div>
                  <p className="desc">{desc}</p>
                  <p className="desc">{desc1}</p>

              </div>
              <div className="left">
                  <img src={img} alt="" className='imgContainer'/>
              </div>

          </div>

    </div>
  )
}

export default HomeRight