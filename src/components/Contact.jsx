import React from "react";
import SubTitle from "./SubTitle";
import styled from "styled-components";

const Contactdiv = styled.div`
  background-color: #29A587;
`;

const Btn = styled.button`
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
   
  }`;

export default function Contact() {
  return (
    <div id="contact" data-aos="zoom-in"> 
      <SubTitle title={"Contact"} />
    <div className="max-w-xl mx-auto justify-center  my-9">
      {/* <div className="bg-white text-start p-4 rounded-xl m-2 md:m-0">
        <h1 className="text-2xl font-bold">Let's get in touch 🤝</h1>
        <p className="text-lg mt-5">
          I'm always eager to explore new opportunities and collaborations. If
          you have any questions or just want to chat, don’t hesitate to reach
          out! I’ll do my best to respond promptly.
        </p>
        <div className="text-xl border-2 border-black rounded-md mt-20 text-center bg-black text-white">
        <h1>Fill out this form and I'll get back to you 👉</h1>
        </div>
      </div> */}
   
      <Contactdiv className="bg-white p-4 rounded-xl m-2 md:m-0">
        <h1 className="text-2xl text-white font-bold">Send Me a Message</h1>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="name" 
              className="block mb-2 text-sm font-medium  text-white text-start m-2 md:m-0 "
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 text-sm text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Name ..."
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white text-start "
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email ..."
              required
            />
          </div>

          <div className=" mb-5">
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-start text-white "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm  bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              />
            </div>
          </div>
          <Btn
            type="submit"
            className=" w-full  bg-white hover:bg-white hover:text-black font-medium rounded-lg text-sm  py-2.5 text-center border-2 border-black items-center  "
              >
            Submit
          </Btn>
        </form>
      </Contactdiv>
    </div>
    </div>
  );
}
