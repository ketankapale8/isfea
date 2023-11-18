import React, {useState , useEffect , useRef} from 'react';
import './newsletter.scss';
import newsletterPng from '../../../assets/newsletter/newsletter.png';
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

const NewsLetter = () => {
  useEffect(() => emailjs.init("zAsaPnZRcrfcOV3K8"), []);
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [query , setQuery] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_rd01n4r";
    const templateId = "template_xgxwao5"
    console.log(name , email)
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name : "Subscriber",
        recipient : email,
      });
      toast.success("Thankyou for your intrest. Please check your mail for more details")
      // alert("email successfully sent check inbox");

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!!")
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='newsletter'>
        <div className="newsLetterContainer">
            {/* <img className='newsletterpng' src={newsletterPng}/> */}
            <div className="left">
                <div className="newsLetterTitle">Stay in the loop</div>
                <p className="newsLetterDesc">Join our newsletter to get latest ISFEA updates.</p>

            </div>
            <div className="right">
                <input type="email" className='emailBox' placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                <button className='subscribeBtn' onClick={handleSubmit}>Subscribe</button>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter