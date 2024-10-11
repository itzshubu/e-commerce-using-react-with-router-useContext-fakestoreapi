import React from 'react'
import { Outlet , Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Link to="shubham">go to shubham</Link><br />
      <Link to="rahul">go to rahul</Link>
      <Outlet/>
    </div>
  )
}

export default About