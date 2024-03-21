import React from 'react'
import imag from './Assest/Coder.jpg'
import './styles.css'
const Hero = () => {
  return (
    <div  className='hero'>
        <div className='left'>
            <h1 className='firstline'>Hello World! My name is</h1>
           
            <h1 className='secondline'> <span className='a'>Abhinav Singh</span></h1>
            <h1 className='thirdline typewriter'>A Web Developer</h1>
            
        </div>
        <div className='right'>
        <img src= {imag} className='heroimage' />
        </div>
      
    </div>
  )
}

export default Hero
