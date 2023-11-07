import React from 'react';
import './commonvisionmission.scss';
import { useLocation } from 'react-router-dom';
import MissionDescCommon from '../MissionDescCommon/MissionDescCommon';
import BannerComp from '../BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg2.png'


const CommonMissionVision = () => {
    const location = useLocation();
    const {data} = location.state;
  return (
    <div className='commonmissionvision'>
        {data?.map(item=>{
            return (
                <>
                <BannerComp img={BannerImg} title={item.detailPageTitle}/>
                <MissionDescCommon detailPageTitle={item.detailPageTitle} para1={item.para1} para2={item.para2} image={item.image}/>
                </>

            )
        })}
    </div>
  )
}

export default CommonMissionVision