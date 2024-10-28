import React from 'react'
import CircleSkill from './CircleSkill';
import SubTitle from './SubTitle';

export default function BackendSkills({ Skillsb }) {


  return (
    <div data-aos="zoom-in-down">
       <SubTitle title={"Backend Skills"}/>
    <div  className="w-full flex gap-8 my-10 flex-wrap justify-center">
      
      {Skillsb.map((skill, ids) => (
        <CircleSkill key={ids} tech={skill} />
      ))}
    </div>

    </div>
  )
}
