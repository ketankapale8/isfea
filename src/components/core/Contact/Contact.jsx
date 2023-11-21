import React , {useState , useEffect , useRef} from 'react';
import './contact.scss';
import img from '../../../assets/contactus/2.jpeg'
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg1.png';
import {motion} from 'framer-motion';
import NewsLetter from '../../common/Newsletter/NewsLetter';
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

// import BannerComp1 from '../../common/BannerComp1/BannerComp';
const Contact = () => {
  useEffect(() => emailjs.init("zAsaPnZRcrfcOV3K8"), []);
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [query , setQuery] = useState('');
  const [subject , setSubject] = useState('');
  const [open, setOpen] = useState(false)


  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_rd01n4r";
    const templateId = "template_xgxwao5";
    
    try {
        if(name || email !== ''){
        setLoading(true);
        setOpen(true);
      }else{
        toast.error("Please fill all the information first!!")
  
      }
        await emailjs.send(serviceId, templateId, {
         name : name,
          recipient : email,
        });
        // toast.success("Thankyou for placing your information. Please check your inbox");
        // alert("email successfully sent check inbox");
        
      } catch (error) {
        console.log(error);
        // toast.error("Something went wrong!!")
      } finally {
        setName('')
        setEmail('');
        setQuery('');
        setSubject('');
        setLoading(false);
      }
  };
  
  const handleConfirm = result => {
    if (result) {
      console.log('some action...')
    }
    
    setOpen(false)
  }

  const Confirm = ({ text, open, handleConfirm }) => {
    return (
      <>
        <div className={open ? 'confirm show' : 'confirm'}>
          <div className="confirm-content">
            <div>
              <h4>{text}</h4>
            </div>
          </div>
          <div className="confirm-btns">
            <button onClick={() => handleConfirm(true)}>Close</button>
            {/* <button onClick={() => handleConfirm(false)}>NO</button> */}
          </div>
        </div>
        <div 
          className="overlay" 
          onClick={() => handleConfirm(false)} 
        />
      </>
    )
  }


  
  return (
    <div className="contact">
      <BannerComp img={BannerImg} title={"Contact Us"}/>

    <div className='contactleft'>
        <div className="contactLeftContainer">
            <motion.div className="left"
              initial={{x : -200}}
              animate={{x : -10}}
              transition={{ delay :0.3 , duration : 1 , type:'spring' , stiffness : 120}}
            >
                <img src={img} alt="" className='imgContainer'/>
            </motion.div>

            <motion.div className="right"
               initial={{x : 200}}
               animate={{x : -10}}
               transition={{ delay :0.3 , duration : 1 , type:'spring' , stiffness : 120}}
            >
             <div className="rightContainer">
              <div className="items">
              <h2>Name:</h2>
              <input placeholder='Enter your name' value={name} onChange={(e)=> setName(e.target.value)} />

              </div>
          
              <div className="items">
              <h2>Email:</h2>
              <input placeholder='Enter your email'
                value={email} onChange={(e)=> setEmail(e.target.value)} 
              />

              </div>
              <div className="items">
              <h2>Subject:</h2>
              <input placeholder='Enter your subject'
                value={subject} onChange={(e)=> setSubject(e.target.value)} 
              />

              </div>

              <div className="items">
              <h2>Query:</h2>
              <textarea placeholder='Enter your query'
                value={query} onChange={(e)=> setQuery(e.target.value)} 
              />

              </div>

              <button className='btn'onClick={handleSubmit}>Submit</button>


             </div>

            </motion.div>
        </div>
    <Confirm 
        text={'Thankyou for placing your information. Please check your inbox'}
        open={open}
        handleConfirm={handleConfirm}
      />
    </div>
    <NewsLetter/>
    </div>
  )
}

export default Contact