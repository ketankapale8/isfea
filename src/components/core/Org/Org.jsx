import React from 'react'
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg3.png'
import BannerImg1 from '../../../assets/backgrounds/bg5.jpg'
import Team from './OurTeam/Team';

import One from '../../../assets/teamMembers/1.jpg'
import Two from '../../../assets/teamMembers/2.jpg'
import Three from '../../../assets/teamMembers/3.jpeg'
import Four from '../../../assets/teamMembers/4.jpg'
import Five from '../../../assets/teamMembers/5.jpg'
import Countries from '../../common/ParticipatingCountries/Countries';
import Sponsors from '../Sponsors/Sponsors';
// import BannerComp1 from '../../common/BannerComp1/BannerComp';

const teamArr = [
  {
      title : "Will Spears",
      position : "Asst Vice President",
      img : One,
      location : "Germany",
  },  
  {
      title : "Hugh Waters",
      position : "Secretary General",
      img : Two,
      location : "Greece",
  },
  {
      title : "Avi Benvenisti",
      position : "President",
      img : Three,
      location : "Australia",
  },
  {
      title : "Julien Chevalley",
      position : "Head Of Operations",
      img : Four,
      location : "South Africa",
  },
  {
      title : "Fen-Fen Chang",
      position : "Executive Director",
      location : "Spain",
      img : Five
  }
]


const Org = () => {
  return (
    <div className='org'>
      <BannerComp img={BannerImg} title={"Organization Structure"}/>
      <Team title={"Our Executive Committee Members"} teamArr={teamArr}/>
      <Team title={"Committee Members"} teamArr={teamArr}/>
      {/* <Countries/> */}
      <Sponsors title={"Our Associations"}/>
    </div>
  )
}

export default Org