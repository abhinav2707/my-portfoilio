import React from 'react'

import './styles.css'
import { SocialIcon } from 'react-social-icons'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
       
      <SocialIcon style={{height:"40px", width: "40px" , margin : "20px" , marginTop:"30px" , marginLeft:"20%"}} url="https://www.linkedin.com/in/abhinav-singh-281aa9211/" />
      <SocialIcon style={{height:"40px", width: "40px" , margin : "20px" , marginTop:"30px"}}url="https://github.com/abhinav2707" className='linkdein'/>
      <SocialIcon style={{height:"40px", width: "40px",  margin : "20px" , marginTop:"30px"}}url="https://leetcode.com/Abhinav2707/" className='linkdein'/>
      <SocialIcon style={{height:"40px", width: "40px",  margin : "20px" , marginTop:"30px"}}url="https://www.instagram.com/_.__abhinav_/" className='linkdein'/>
      

      </div>
      <div className='content'>
          <a className='content1'>AboutMe</a>
          <a className='content1'>Projects</a>
          <a className='content1'>Skills</a>
          <a className='content1'>Contact ME</a>
          <a className='content1'>Resume</a>
      </div>
    </div>
  )
}

export default Header
