import React from 'react';
import './news.scss'
import Sponsors from '../Sponsors/Sponsors'
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg4.png'
import {motion} from 'framer-motion';

// import BannerComp1 from '../../common/BannerComp1/BannerComp';

const News = () => {
  const newsArr = [
    {
      title : "A leading institution for Olympic Education",
      desc : "The IOA, situated next to the archaeological site where the Olympic Games were born, aims at studying, enriching, and promoting Olympism and its values in relevance with current global issues of Olympic interest and in conformity with the principles laid down by the ancient Greeks and the revivers of the contemporary Olympic Movement."
    },
     {
      title : "Win once-in-a-lifetime Olympic experiences",
      desc: "The Road to Paris Volleyball Qualifier takes place in Brazil, Japan and the People’s Republic of China from 30 September to 8 October with six nations earning Olympic quota spots."
    }, {
      title : "Volleyball Men’s Olympic Qualifying Tournament ",
      desc : "The Road to Paris Volleyball Qualifier takes place in Brazil, Japan and the People’s Republic of China from 30 September to 8 October with six nations earning Olympic quota spots."
    }
  ]
  return (
    <>
    <div className='news'>
      <BannerComp img={BannerImg} title={"News"}/>
      <div className="newsTitle">Latest News</div>
      <div className="newsContainer">
      {newsArr.map(item=>{
        return (
          <>
            <motion.div className="newsBox"
                  initial={{x : -200}}
                  animate={{x : -10}}
                  transition={{ delay :0.3 , duration : 1 , type:'spring' , stiffness : 120}}
            >
              <div className="title">{item.title}</div>
              <hr />
              <p className="desc">{item.desc}</p>
            </motion.div>
          
          </>
        )
      })}
      </div>
        
    </div>
      <Sponsors title={"Our Sponsors"}/>
    
    </>
  )
}

export default News