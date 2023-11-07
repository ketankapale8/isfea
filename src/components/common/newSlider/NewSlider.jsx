import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
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
  return (
    <div className="slide-container" >
      <Fade arrows={false}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} style={{position:'relative' ,width:'100%'}}>
            <img style={{ width: '100%' , height:'820px' , objectFit:'cover' ,}} src={fadeImage.img} />
            <h2 style={{position:'absolute', top: '60%' , left:'10%' , color:'white', fontSize:'2.5rem'}}>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow