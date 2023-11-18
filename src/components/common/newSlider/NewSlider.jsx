import React , {useState, useEffect} from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slider.scss'
// import one from '../../../assets/backgrounds/bg46.jpg'
// import two from '../../../assets/Banner2.jpg'
// import three from '../../../assets/backgrounds/bg45.jpg'
// import four from '../../../assets/backgrounds/bg44.jpg'

import one from '../../../assets/VectorImages/One.jpg'
import two from '../../../assets/VectorImages/Two.jpg'
import three from '../../../assets/VectorImages/Three.jpg'
import four from '../../../assets/VectorImages/Four.jpg'




const fadeImages = [
  {
    img: one,
    caption: 'Unlocking Milestones. '
  },
  {
    img: two,
    caption: 'Achieving New Heights.'
  },
  {
    img: three,
    caption: 'Creating Opportunities'
  },

  {
    img: four,
    caption: 'Finishing Touches.'
  },
];




const Slideshow = () => {
  let [w , setW] = useState(window.innerWidth)
    //  let width = window.innerWidth;
    function updateSize(){
      return setW(window.innerWidth)
  
    }
  
    useEffect(()=>{
      window.addEventListener('resize', updateSize);
      
    },[w])
  return (
    <div className="slide-container" >
      <Fade arrows={false}
        duration="2000"
      >
        {fadeImages.map((fadeImage, index) => (
          <div key={index} style={{position:'relative' , width:'100%'}} >
            <img style={{ width: w, height:'920px', objectFit:'cover' }} src={fadeImage.img} className='imgslider'/>
            <h2 style={{position:'absolute', top: '60%' , left:'10%' , color:'white', fontSize:'2.5rem'}}>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow