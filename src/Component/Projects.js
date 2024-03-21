import React from 'react'
import cahtApp from './Assest/chatApp.png'
const Projects = () => {
  return (
    <div className='projects'>
       
        <h2 className='workheading'>
            My Projects
        </h2>
        <p className='description'>From web Components and UX design to React.js and Node.js, check out my latest web projects</p>
        <div>
        <div className='project1'>
 
  <img src={cahtApp} alt='image not found' className='chatAppimage'/>
  <div className='ChatContent'>
    <p>Hi</p>
  </div>
</div>
        <div className='project2'>

        </div>
        <div className='project3'>

        </div>
        </div>
    </div>
  )
}

export default Projects
