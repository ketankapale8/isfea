import React from 'react';
import './news.scss'
import Sponsors from '../Sponsors/Sponsors'
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg4.png'
import {motion} from 'framer-motion';
import NewsLetter from '../../common/Newsletter/NewsLetter';

// import BannerComp1 from '../../common/BannerComp1/BannerComp';

const News = () => {
  const newsArr = [
    {
      title : "ISFEA announces it’s summer 2024 sports event",
      desc : "The International Sports Federation of Educational Alliances has launched the ISFEA Summer Sports meet 2024, a 6-day event that will be held in Basel, Switzerland.",
      desc1 : "To be held in the first fortnight of July 2024, participants will compete in a range of athletics events in front of spectators for victory and glory. Participating teams have not yet been confirmed, however the event is expected to witness participation of young athletes from Switzerland, UAE, Africa and India. In addition to the competitions, the event will also feature a spotlight series with the coaching community on improving training support for young athletes. For queries, please reach out to info@isfea.com"
    },
     {
      title : "ISFEA collaborates with associations in India, Switzerland , UAE  and Africa",
      desc: "In a major development for the federation, ISFEA has announced tie-ups with government agencies and major sports associations across 4 countries. The collaboration is expected to focus on ISFEA’s long term agenda of creating a global platform for enhancing the sport education ecosystem through strategic partnerships and alliances. Additionally, ISFEA will be rolling out a series of international competitive events for athletes from the partnering countries. For queries, please reach out to info@isfea.com"
    }, {
      title : "ISFEA opens a new chapter in Singapore",
      desc : "ISFEA has announced the establishment of a strategic chapter in Singapore, signifying a key step in growing its global footprint. The new chapter signifies a pronounced commitment to the Asia-Pacific sports education arena and represents the next step towards building participation from one of the most dynamic sports markets in the world. ISFEA is focused on creating partnerships that can not only build innovative ecosystems in the sports education sector but also contribute meaningfully to the vibrant sports culture in the region. For queries, please reach out to info@isfea.com"
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
              <p className="desc">{item?.desc1}</p>

            </motion.div>
          
          </>
        )
      })}
      </div>
        
    </div>
    <NewsLetter/>
      {/* <Sponsors title={"Our Sponsors"}/> */}
    
    </>
  )
}

export default News