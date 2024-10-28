import React from "react";
// import { Link } from "react-router-dom";
import img from "../assets/images/vission.jpg";
import styled from "styled-components";
import SubTitle from "./SubTitle";
// import { FaGithub } from "react-icons/fa6";
// import { Tilt } from "react-tilt";
// import { IoIosRocket } from "react-icons/io";

const Card = styled.div`
  background-color: #29A587;
  color: white;
 transition: all 0.5s ease-in-out;
 &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1);
  }
  `
const Btn = styled.a`
 background-color: black;
  color: white;
  padding: 10px 20px;
  border: 2px solid black;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
   
  }
  `

export default function Projects() {
  return (
   
    <div id="projects" data-aos="zoom-in">
         <SubTitle title={"Projects"} />
         <div  className="grid md:grid-cols-3 grid-rows-1 gap-y-8 max-w-7xl mx-auto justify-center my-10">
          
     
          <Card className="max-w-sm bg-white border overflow-hidden mx-auto  rounded-lg shadow animate-slideUp">
          <figure className=" overflow-hidden m-3">
              <img
                className="rounded-lg hover:scale-105 duration-300 "
                src={img}
                alt=""
              />
            </figure>
            <div className="flex gap-2 m-3 text-black font-bold">
              <div style={{ border: '1px solid #F1ECE4', fontSize: '12px',fontWeight: '400', padding: '2px 8px', backgroundColor: 'white', borderRadius: '10px' , width: 'fit-content' }}>tag</div>
              <div style={{ border: '1px solid #F1ECE4', fontSize: '12px',fontWeight: '400', padding: '2px 8px', backgroundColor: 'white', borderRadius: '10px' , width: 'fit-content' }}>tag</div>
            </div>
            <div className="pb-2  bg-gradient-to-b from-transparent z-10  rounded-b-xl">
              
        
                <h5 className="mb-2 text-2xl font-bold  text-black">
                  Project Title
                </h5>
          
              <p className="mb-3 font-normal">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
        
    
     <div className="my-4">
     <Btn href="/" >
        <i className="fa-brands fa-github"></i> Code
        </Btn>

        <Btn href="/" >
      <i className="fa-solid fa-rocket"></i> Demo
        </Btn>
     </div>

            </div>
          </Card>
     
     
     
          <Card className="max-w-sm bg-white border overflow-hidden mx-auto  rounded-lg shadow animate-slideUp">
          <figure className=" overflow-hidden m-3">
              <img
                className="rounded-lg hover:scale-105 duration-300 "
                src={img}
                alt=""
              />
            </figure>
            <div className="flex gap-2 m-3 text-black font-bold">
              <div style={{ border: '1px solid #F1ECE4', fontSize: '12px',fontWeight: '400', padding: '2px 8px', backgroundColor: 'white', borderRadius: '10px' , width: 'fit-content' }}>tag</div>
              <div style={{ border: '1px solid #F1ECE4', fontSize: '12px',fontWeight: '400', padding: '2px 8px', backgroundColor: 'white', borderRadius: '10px' , width: 'fit-content' }}>tag</div>
            </div>
            <div className="pb-2  bg-gradient-to-b from-transparent z-10  rounded-b-xl">
              
        
                <h5 className="mb-2 text-2xl font-bold  text-black">
                  Project Title
                </h5>
          
              <p className="mb-3 font-normal">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
        
    
     <div className="my-4">
     <Btn href="/" >
        <i className="fa-brands fa-github"></i> Code
        </Btn>

        <Btn href="/" >
      <i className="fa-solid fa-rocket"></i> Demo
        </Btn>
     </div>

            </div>
          </Card>
     
     
     
          <Card className="max-w-sm bg-white border overflow-hidden mx-auto  rounded-lg shadow animate-slideUp">
          <figure className=" overflow-hidden m-3">
              <img
                className="rounded-lg hover:scale-105 duration-300 "
                src={img}
                alt=""
              />
            </figure>
            <div className="flex gap-2 m-3 text-black font-bold">
              <div style={{ border: '1px solid #F1ECE4', fontSize: '12px',fontWeight: '400', padding: '2px 8px', backgroundColor: 'white', borderRadius: '10px' , width: 'fit-content' }}>tag</div>
              <div style={{ border: '1px solid #F1ECE4', fontSize: '12px',fontWeight: '400', padding: '2px 8px', backgroundColor: 'white', borderRadius: '10px' , width: 'fit-content' }}>tag</div>
            </div>
            <div className="pb-2  bg-gradient-to-b from-transparent z-10  rounded-b-xl">
              
        
                <h5 className="mb-2 text-2xl font-bold  text-black">
                  Project Title
                </h5>
          
              <p className="mb-3 font-normal">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
        
    
     <div className="my-4">
     <Btn href="/" >
        <i className="fa-brands fa-github"></i> Code
        </Btn>

        <Btn href="/" >
      <i className="fa-solid fa-rocket"></i> Demo
        </Btn>
     </div>

            </div>
          </Card>
     
     
         
     
   
       
   

          </div>
        </div>
       
      
  );
}
