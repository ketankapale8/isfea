import React from 'react';
import './counter.scss';
import Countdown from "react-countdown";
import logo from '../../../assets/newLogo/One.png';
import CounterBannerImg from '../../../assets/backgrounds/bg21edit.gif'

const Counter = () => {
  // const date = new Date('Nov 2 2023');
  var seconds = new Date('Nov 2 2023').getTime() / 1000;
console.log(seconds) //1440516958
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
                <Countdown date={Date.now() + 15552000000 } renderer={renderer} />
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Counter