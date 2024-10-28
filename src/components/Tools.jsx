import React from 'react'
import CircleSkill from './CircleSkill';
import SubTitle from './SubTitle';

export default function Tools({ Tools }) {


  return (
    <div data-aos="fade-up-right" className='max-w-7xl flex-col mx-auto justify-center'>
            <SubTitle title={"Tools"}/>

    <div  className="w-full flex gap-8 my-10 flex-wrap justify-center">
      
      {Tools.map((skill, ids) => (
        <CircleSkill key={ids} tech={skill} />
      ))}
    </div>

    </div>
  )
}
