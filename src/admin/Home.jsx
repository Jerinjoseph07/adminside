import React from 'react'

import './Home.css'
// import './navbar.css'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div>
    <div className='navbar'>
    {/* <Link to="/" className='logo'> */}
      <h1 className='navhead'>workers connect</h1>
    {/* </Link> */}
    <ul className='nav-list'>
      <li>
        <Link to="/Workerdetails">All workers</Link>
        <Link to="/Clientdetails">All client</Link>
      </li>
    </ul>
  </div>
  <div>
  <div className='background2' >
        <h1 className='homehead'> Welcome to Our Platform: <br></br>Connecting Workers and Clients Seamlessly!</h1>
   
          {/* <Link className='getstarted' to="/login">Get Started </Link> */}
          </div>
  </div>
  </div>
          
  )
}

export default Home