import React , {useState} from 'react';
import './regulations.scss';
import dot from '../../../../assets/regulations/rec.png'

const Regulations = () => {
    const [showReg , setShowReg] = useState(false);
    const [title , setTitle] = useState('Show')
    const regulationsArr = [
        {
            title : "Participants (Art. 1):",
            desc : [
                {
                    para1 : "Athletes must reside or attend school in the city they represent.",
                    para2 : "Age eligibility is defined: athletes must be 12 years old by January 1 of the Games year and still be 15 years old on December 31 of the Games year.",
                    para3 : "Athletes can only participate in one sport."

                }
            ]
        }, 

        {
            title : "International Children’s Games (Art. 2):",
            desc : [
                {
                    para1 : "Can be either Summer or Winter Games.",
                    para2 : " Summer Games must include athletics and swimming as obligatory sports.",
                    para3 : "Winter Games must include skiing and an ice sport.",
                    para4 : "Participation must involve at least five cities from a minimum of three countries, with four different sports being held."

                }
            ]
        },

        {
            title : "Spirit of the Children’s Games (Art. 3):",
            desc : [
                {
                    para1 : "Emphasis on fair play and cultural exchange.",
                    para2 : "Discourages qualifying competitions and straight knockout formats.",
                    // para3 : "Athletes can only participate in one sport."

                }
            ]
        },
        {
            title : "Sport (Art. 4):",
            desc : [
                {
                    para1 : "Only sports recognized by the Grading Committee should be offered.",
                    para2 : " Regional sports can be considered as demonstration sports with the final decision resting with the ISFEA Committee.",
                    para3 : "Certain sports, such as boxing, full-contact, motor sports, descent, and Super-G, are prohibited.",
                    // para4 : "Participation must involve at least five cities from a minimum of three countries, with four different sports being held."

                }
            ]
        },

        {
            title : "Specific Regulations (Art. 5):",
            desc : [
                {
                    para1 : "Refers to International Sports Federations Rules and Regulations for specific sports.",
                    para2 : " The Committee of the International Children’s Games delegates a technical commission member for each sports event.",
                    para3 : "Organizers are responsible for comprehensive medical care for participants.",
                    // para4 : "Participation must involve at least five cities from a minimum of three countries, with four different sports being held."

                }
            ]
        },

        {
            title : "Applications to host the Games (Art. 6):",
            desc : [
                {
                    para1 : "Applications should be submitted to the Committee of the International Children’s Games office at least two years before the proposed Games.",
                    para2 : " Must follow the official ISFEA Bid form and process.",
                    // para3 : "Organizers are responsible for comprehensive medical care for participants.",
                    // para4 : "Participation must involve at least five cities from a minimum of three countries, with four different sports being held."

                }
            ]
        },

        {
            title : "Invitations (Art. 7):",
            desc : [
                {
                    para1 : "Invitations are announced by the hosting city, containing essential details such as dates, sports, entry guidelines, and technical handbooks.",
                    // para2 : " Must follow the official ISFEA Bid form and process.",
                    // para3 : "Organizers are responsible for comprehensive medical care for participants.",
                    // para4 : "Participation must involve at least five cities from a minimum of three countries, with four different sports being held."

                }
            ]
        },

        {
            title : "Awards Ceremony (Art. 8):",
            desc : [
                {
                    para1 : "Winners receive gold, silver, and bronze medals.",
                    para2 : " Participation certificates are prepared for all participants and coaches.",
                    para3 : "Committee members are involved in the Awards Ceremonies.",
                    // para4 : "Participation must involve at least five cities from a minimum of three countries, with four different sports being held."

                }
            ]
        },

        {
            title : "Opening and Closing of the International Children’s Games (Art. 9):",
            desc : [
                {
                    para1 : "The Opening and Closing Ceremonies include specific elements such as the handover of the flag, lighting of the Olympic flame, and address by the organizers.",
                    para2 : " Teams must line up under the flag of their city.",
                    para3 : "The Closing Ceremony involves lowering the flag and presenting a Certificate of Appreciation to the host city.",
                    // para4 : "Participation must involve at least five cities from a minimum of three countries, with four different sports being held."

                }
            ]
        },

        {
            title : "Various (Art. 10):",
            desc : [
                {
                    para1 : "Matters not specified in these regulations are decided by the Committee of the International Children’s Games.",
                    para2 : " The Secretary General of the International Children’s Games assists organizers with questions related to the event.",
                     para3 : "Organizers must provide a complete documentation report and related materials for archival purposes after the Games' conclusion.",
                    // para4 : "Participation must involve at least five cities from a minimum of three countries, with four different sports being held."

                }
            ]
        },
    ]

    function Toggle(){
        if(showReg == false){
            setShowReg(true);
            setTitle('Hide')
        }else{
            setShowReg(false);
            setTitle('Show')
        }
    }
  return (<div className='regulationsMain'>
        <button onClick={()=>Toggle()}>{title} Regulations </button>
        {showReg && (
        <div className='regulations'>
                <h3 className="regulationsTitle">Organization Regulations (to be confirmed)</h3>
                    {regulationsArr.map(item=>{
                        return (
                            <div className="regulationsContainer">
                                <h4 className="containerTitle">{item.title}</h4>
                                <div className="containerDesc">
                                    {item.desc.map(content => {
                                        return (
                                            <>
                                            
                                                <p>{content?.para1}</p>
                                                <p>{content?.para2}</p>
                                                <p>{content?.para3}</p>
                                                <p>{content?.para4}</p>
                                            
                                            </>

                                            
                                        )
                                    })}
                                </div>

                            </div>
                        )
                    })}


        </div>
        )}
  
  </div>
  )
}

export default Regulations