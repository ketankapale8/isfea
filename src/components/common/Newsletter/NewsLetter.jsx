import React, {useState , useEffect , useRef} from 'react';
import './newsletter.scss';
import newsletterPng from '../../../assets/newsletter/newsletter.png';
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
import validator from 'validator';


const NewsLetter = () => {
  useEffect(() => emailjs.init("zAsaPnZRcrfcOV3K8"), []);
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [query , setQuery] = useState('');
  const [message, setMessage] = useState(" ");


  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_rd01n4r";
    const templateId = "template_xgxwao5"
    console.log(name , email)
    try {
      if(email !== ''){
      setLoading(true);
      }else{
        toast.error("Please place your email before hitting submit!")

      }
      await emailjs.send(serviceId, templateId, {
       name : "Subscriber",
        recipient : email,
      });
      toast.success("Thank you for your interest. Please check your mail for more details")
      // alert("email successfully sent check inbox");

    } catch (error) {
      console.log(error);
      // toast.error("Something went wrong!!")
    } finally {
      setLoading(false);
    }
  };

  function handleEmail(event) {
    let new_Email = event.target.value;
    setEmail(new_Email);
    if (!validator.isEmail(new_Email)) {
      setMessage("Please, enter a valid email!");
    } else {
      setMessage("");
    }
  }
  return (
    <div className='newsletter'>
        <div className="newsLetterContainer">
            {/* <img className='newsletterpng' src={newsletterPng}/> */}
            <div className="left">
                <div className="newsLetterTitle">Stay in the loop</div>
                <p className="newsLetterDesc">Join our newsletter to get the latest updates.</p>

            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
            <div style = {{ color: "red" }}> {message} </div>
            <div className="right">

                <input type="email" className='emailBox' placeholder='Enter your email' value={email} onChange={(e)=> handleEmail(e)} />
                <button className='subscribeBtn' onClick={handleSubmit}>Subscribe</button>
            </div>

            </div>

        </div>
    </div>
  )
}

export default NewsLetter