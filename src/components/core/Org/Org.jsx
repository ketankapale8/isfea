import React from 'react'
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg3.png'
import BannerImg1 from '../../../assets/backgrounds/bg5.jpg'
import Team from './OurTeam/Team';

import One from '../../../assets/teamMembers/Picture1.jpg'
import Two from '../../../assets/teamMembers/Picture2.jpg'
import Three from '../../../assets/teamMembers/Picture3.jpg'
import Four from '../../../assets/teamMembers/Picture4.png'
import Five from '../../../assets/teamMembers/Picture5.jpg'
import Countries from '../../common/ParticipatingCountries/Countries';
import Sponsors from '../Sponsors/Sponsors';
// import BannerComp1 from '../../common/BannerComp1/BannerComp';

const teamArr = [
  {
      title : "Will Spears",
      position : "Picture",
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

const teamArr1 = [
  {
      title : "Vijay Pal Singh",
      position : "Chairman",
      img : One,
      location : "Germany",
  },  
  {
      title : "Dr. Erman H. Küçük ",
      position : "Secretary General",
      img : Two,
      location : "Greece",
  },
  {
      title : "Jitendra Sharma ",
      position : "Chapter Lead  ",
      img : Three,
      location : "India",
  },
  {
      title : "Adwait Kashalkar",
      position : "Chapter Lead  ",
      img : Five,
      location : "Singapore",
  },
  {
      title : "Patrick Bellomo",
      position : "Treasurer ",
      location : "Spain",
      img : Four
  }
]


const Org = () => {
  return (
    <div className='org'>
      <BannerComp img={BannerImg} title={"Our team"}/>
      <Team title={"Our executive team"} teamArr={teamArr1}/>
      {/* <Team title={"Our Team"} teamArr={teamArr}/> */}
      {/* <Countries/> */}
      {/* <Sponsors title={"Our Associations"}/> */}
    </div>
  )
}

export default Org