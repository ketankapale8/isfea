// import logo from './logo.svg';
import './App.css';
import { Suspense , useState , useEffect } from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './components/core/Home/Home.jsx';
import Org from './components/core/Org/Org';
import Contact from './components/core/Contact/Contact';
import Sponsors from './components/core/Sponsors/Sponsors';
import News from './components/core/News/News'
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import About from './components/core/About/About';
import SideMenuComp from './components/common/SideMenuComponent/SideMenuComp';

function App() {

  let [w , setW] = useState(window.innerWidth)
  //  let width = window.innerWidth;
  function updateSize(){
    return setW(window.innerWidth)

  }

  useEffect(()=>{
    window.addEventListener('resize', updateSize);
    
  },[w])
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Suspense fallback={<h4>Loading...</h4>}>
          {/* { w > 870 ? <Navbar/>: <RenderSideBar/>} */}
          { w > 870 ? <Navbar/>: <SideMenuComp/>}
        </Suspense>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/organization' element={<Org/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/contactus' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
