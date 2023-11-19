import React, { useEffect, useState } from 'react';
import './counter.scss';
import Countdown from "react-countdown";
// import logo from '../../../assets/newLogo/One.png';
import logo from '../../../assets/logos/3.png';

import CounterBannerImg from '../../../assets/backgrounds/bg21edit.gif'

const Counter = () => {
  // var today = new Date();
// var priorDate = new Date(new Date().setDate(today.getDate() - 3));
// console.log(priorDate.getTime());
let [today , setToday] = useState(new Date('19 Nov 2023'));
let [date , setDate] = useState(new Date(new Date().setDate(today.getDate() +56)).getTime())




  // useEffect(()=> {
  //   setTimeout((setSeconds(seconds+=1)), 100000)
  // },[seconds])
    const renderer = ({ days , hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return null;
        } else {
          // Render a countdown
          return (
            <span className='c'>
                <div className="box1">
                    <div style={{fontWeight:'bold'}}>{days}</div>
                    <div className='text'>Days</div>
                </div>
                <div className="box2">
                    <div style={{fontWeight:'bold'}}>{minutes}</div>
                    <div className='text'>Minutes</div>
                </div>
                <div className="box3">
                    <div style={{fontWeight:'bold'}}>{seconds}</div>
                    <div className='text'>Seconds</div>
                </div>
              {/* {days}:{minutes}:{seconds} */}
            </span>
          );
        }
      };
  return (
    <div className='counter'>
        <div className="counterContainer">
            <img className='counterBgimg' src={CounterBannerImg}/>

            <div className="textC">
            <div className="counterTextContainer">
                <div className="titleContainer">
                    <h3 className='counterCity'>Zürich , Switzerland</h3>
                    <h3 className='counterDay'>Summer , 2024</h3>
    
                </div>
                <div className="logoContainer">
                    <img className='logoImg' src={logo}/>
                </div>
                <div className="counterDisplayContainer">
                <Countdown date={date + (14688000000) } renderer={renderer} />
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Counter