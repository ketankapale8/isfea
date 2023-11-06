import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import {SiAboutdotme} from 'react-icons/si';
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {LiaIndustrySolid} from 'react-icons/lia'
import {AiOutlineCodepenCircle} from 'react-icons/ai';
import {GiTalk} from 'react-icons/gi'
import { faB, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import './sidemenu.scss'



const SideMenuComp = () => {
  const [showbar , setShowbar] = React.useState(false)

  const Toggle = () =>{
    if (showbar == true){
      setShowbar(false)
    }else{
      setShowbar(true)
    }
  }

  const closeModal = () => {setShowbar(false)}
  // onClick={()=> Toggle() }
  return (
    <>
    
    <div style={{position: 'fixed' , top: '5%' , left: '87%' , zIndex: 9999}} >
      <FontAwesomeIcon color='white' size='120px' icon={faBars} onClick={()=> setShowbar(true)} />
   
    </div>
      {showbar && 
      <>
      <Modal closeModal={closeModal}/>
        
      </>
      }

    </>

  )
}

export default SideMenuComp