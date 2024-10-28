import React from 'react'
import  TypewriterClass  from 'typewriter-effect'

function TopNav() {
 
  return (
    <div className='top-nav flex justify-center ' style={{ height: '100vh' }}>
       <div className="content my-auto">
          <h1 style={{  }} className='text-5xl font-bold'>Hey there, I’m <span style={{ color: '#29A587', fontFamily: "Jost" }}>Mohamed</span>.</h1>
          <p style={{ color: '#798086' }} className='text-3xl mt-2 flex justify-center'>  <TypewriterClass
        options={{
          strings: ['Full-Stack Developer', 'Frontend Developer', 'Backend Developer'],
          autoStart: true,
          loop: true,
        }}
      /></p>
         
       </div>
    </div>
  )
}

export default TopNav
