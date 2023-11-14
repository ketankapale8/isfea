import React from 'react';
import './newsletter.scss';
import newsletterPng from '../../../assets/newsletter/newsletter.png'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <div className="newsLetterContainer">
            {/* <img className='newsletterpng' src={newsletterPng}/> */}
            <div className="left">
                <div className="newsLetterTitle">Stay in the loop</div>
                <p className="newsLetterDesc">Join our newsletter to get latest ISFEA updates.</p>

            </div>
            <div className="right">
                <input type="email" className='emailBox' placeholder='Enter your email' />
                <button className='subscribeBtn'>Subscribe</button>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter