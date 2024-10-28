import React from 'react'
import styled from 'styled-components'

const CircleSkilll  = styled.div`
 &:hover {
    background-color: #29A587;
  }
`

export default function CircleSkill({ tech }) {
  return (
    <CircleSkilll
    className="w-28 h-28 text-7xl p-4 flex justify-center items-center text-cBlack border-cBlack border-2 rounded-full  hover:text-white hover:scale-110 duration-300 ease-in-out shadow-lg shadow-black"
    title={tech.name}
    aria-label={tech.name}
  >
    {tech.icon}
  </CircleSkilll>
  )
}
