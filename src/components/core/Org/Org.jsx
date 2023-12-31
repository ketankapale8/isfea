import React from 'react'
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg3.png'
import BannerImg1 from '../../../assets/backgrounds/bg5.jpg'
import Team from './OurTeam/Team';

import One from '../../../assets/teamMembers/Picture1.jpg'
import Two from '../../../assets/teamMembers/8.jpg'
import Three from '../../../assets/teamMembers/Picture3.jpg'
import Four from '../../../assets/teamMembers/PatrickNew.png'
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
      location : "",
  },  
  {
      title : "Dr. Erman H. Küçük ",
      position : "Secretary General",
      img : Two,
      location : "",
  },
  {
    title : "Patrick Bellomo",
    position : "Treasurer ",
    location : "",
    img : Four
},
  {
      title : "Jitendra Sharma ",
      position : "Chapter Lead , India  ",
      img : Three,
      location : "",
  },
  {
      title : "Adwait Kashalkar",
      position : "Chapter Lead ,Singapore ",
      img : Five,
      location : "",
  },
 
]


const Org = () => {
  return (
    <div className='org'>
      <BannerComp img={BannerImg} title={"Our Team"}/>
      <Team title={"Our Executive Team"} teamArr={teamArr1}/>
      
      {/* <Team title={"Our Team"} teamArr={teamArr}/> */}
      {/* <Countries/> */}
      {/* <Sponsors title={"Our Associations"}/> */}
    </div>
  )
}

export default Org