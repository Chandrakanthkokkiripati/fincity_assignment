import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

import './index.css'

const Contacts = () => {
  return (
    <div className='contacts-bg-container' id='contactsSection'>
      <div className='icons-container'>
        <AiFillInstagram className='contact-icon' size={30}/>
        <IoLogoLinkedin className='contact-icon' size={30}/>
        <IoMdMail className='contact-icon' size={30}/>
      </div>
      <p>Copyright © 2024.  All rights reserved</p>
    </div>
  )
}

export default Contacts
