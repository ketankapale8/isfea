import React from 'react';
import './faq.scss';

const questions = [
    {
      id: 1,
      question: 'What is the primary mission and goal of ISFEA?',
      answer: "ISFEA's primary mission is to create a sustainable and inclusive environment that enhances the positive impact of sports on education and empowers individuals through opportunities in sports and education.",
    },
      {
      id: 2,
      question: 'How can my organization or institution become a member of ISFEA',
      answer: 'To become a member, please visit our website and follow the membership application process outlined there. Membership is open to organizations and institutions that share our mission and values.',
    },
      {
      id: 3,
      question: 'What benefits do member organizations receive?',
      answer: 'Member organizations gain access to a network of like-minded institutions, resources, and opportunities for collaboration. They also receive updates on ISFEA initiatives, events, and research.',
    },
        {
      id: 4,
      question: ' How does ISFEA support the integration of sports and education?',
      answer: " ISFEA supports integration through various programs, partnerships, and initiatives that promote sports-related educational opportunities, mentorship, and the development of life skills in athletes.",
    },

    {
        id: 5,
        question: 'What types of programs or initiatives does ISFEA undertake to promote its mission?',
        answer: 'ISFEA runs programs such as scholarship opportunities, educational workshops, research projects, and collaborative events that bridge the gap between sports and education.',
      },
        {
        id: 6,
        question: 'Can individuals join ISFEA, or is it only open to organizations and institutions?',
        answer: 'While ISFEA primarily welcomes organizations and institutions as members, individuals who are passionate about our mission can engage with our initiatives and events.',
      },
          {
        id: 7,
        question: ' How does ISFEA facilitate collaboration between sports and education institutions?',
        answer: " ISFEA facilitates collaboration through networking opportunities, joint projects, and knowledge-sharing platforms, bringing sports and education organizations together.",
      },
      {
        id: 8,
        question: ' What resources and support does ISFEA offer to its members?',
        answer: " ISFEA offers resources such as research findings, best practices, and guidance to help members implement successful sports and education programs. Support may include mentorship and funding opportunities.",
      },
    
  ]
  

const FAQ = () => {


    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleSearchChange = e => {
      setSearchTerm(e.target.value);
    };

    const Question = props => {
        const [isActive, setActive] = React.useState(false);
        const handleClick = (id) => {
         setActive(!isActive)
       }
         return(
           <div className="question-wrapper">
           <div className='question' id={props.id}>
             <h3>{props.question}</h3>
             <button onClick={() => handleClick(props.id)}>
               <svg className={isActive? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
         <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
       </svg>
             </button>     
           </div>
           <div className={isActive? 'answer active' : 'answer'}>{props.answer}</div>
           </div>
         )
       }
  return (
    <div>
         <div className='container'>
      <h2 className="heading">FAQ's</h2>
      <section className='faq'>
       {questions.map(item => <Question question={item.question} answer={item.answer} />)}
      </section>      
    </div>
    </div>
  )
}

export default FAQ