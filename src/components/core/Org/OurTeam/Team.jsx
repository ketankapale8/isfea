import React from 'react';
import './team.scss';
import One from '../../../../assets/teamMembers/1.jpg'
import Two from '../../../../assets/teamMembers/2.jpg'
import Three from '../../../../assets/teamMembers/3.jpeg'
import Four from '../../../../assets/teamMembers/4.jpg'
import Five from '../../../../assets/teamMembers/5.jpg'


const Team = ({title , teamArr}) => {

    
  return (
    <div className='team'>
        <div className="teamContainer">
            <div className="title">{title}</div>
            <div className="teamArr">
                {teamArr.map((item, idx)=>{
                    return (
                        <>
                        <div className="teamMemberBox" key={idx}>
                            <img src={item.img} alt="" className='teamMemberImg' />
                            <div className="desc">
                            <h3 className="teamMemberTitle">{item.title}</h3>
                            <p className='position'>{item.position}</p>
                            <p className='position'>{item.location}</p>


                            </div>
                        </div>
                        
                        </>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Team