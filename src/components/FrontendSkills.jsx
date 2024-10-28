import React from 'react'
import CircleSkill from './CircleSkill';
import SubTitle from './SubTitle';

export default function FrontendSkills({ Skillsf }) {


  return (
    <div data-aos="fade-right">
      <SubTitle title={"Frontend Skills"}/>
    <div  className="w-full flex gap-8 my-10 flex-wrap justify-center ">
      
      {Skillsf.map((skill, ids) => (
        <CircleSkill key={ids} tech={skill} />
      ))}
    </div>

    </div>
  )
}
