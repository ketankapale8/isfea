import React from 'react';
import './commonvalues.scss';
import { useLocation } from 'react-router-dom';
import MissionDescCommon from '../MissionDescCommon/MissionDescCommon';
import BannerComp from '../BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg2.png'
import ValuesDescCommon from '../ValuesDescCommon/ValuesDescCommon';


const CommonValues = () => {
    const location = useLocation();
    const {data} = location.state;

  return (
    <div className='commonvalues'>
        {data?.map(item=>{
            return (
                <>
                <BannerComp img={BannerImg} title={item.detailPageTitle}/>
                <ValuesDescCommon detailPageTitle={item.detailPageTitle}
                 para1={item.para1} para2={item.para2} para3={item.para3}
                  para4={item.para4} para5={item.para5} para6={item.para6} 
            

                 image={item.image}/>
                </>

            )
        })}
    </div>
  )
}

export default CommonValues