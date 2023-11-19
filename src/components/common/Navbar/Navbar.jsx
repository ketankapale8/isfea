import React , {useState , useEffect} from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';
// import logo from '../../../assets/ifseaneww.png'
// import logo from '../../../assets/newLogo/One.png';
import logo from '../../../assets/logos/3.png'



const Navbar = () => {
  const [navbarChange ,setNavbarChange] = useState(false);
  const changeBackground = () =>{
    if(window.scrollY >= 85){
      // console.log(window.scrollY)
      setNavbarChange(true)
    }else {
      setNavbarChange(false)
    }
}
  const navArr = [
    
    {
      title : "Home",
      link : "/"
    }, 
    {
      title : "About Us",
      link : "/about"
    }, 
    {
      title : "Our Team",
      link : "/organization"

    },
    {
      title : "News",
      link : "/news"

    },
    {
      title : "Upcoming Events",
      link : "/upcomingevents"

    },
    
    {
      title : "Contact Us",
      link : "/contactus"

    }
  ]
  return (
    <nav className='navbar'>
      <Link to="/" style={{color:"inherit", textDecoration:'none'}}>
        <div className="logoC">
          <img src={logo} alt="" className='logoImg'/>
        </div>
      
      </Link>
      <div className="rest">
      {navArr.map((item,idx)=>{
        return(
          <div key={idx} style={{textTransform:'none', textDecoration:'none'}}>
            <Link to={`${item.link}`} style={{textDecoration:'none', textTransform:'none'}}>
              <div className='list' style={{textDecoration:'none'}}>{item.title}</div>
            </Link>
          </div>

        )
      })}

      </div>

    </nav>
  )
}

export default Navbar