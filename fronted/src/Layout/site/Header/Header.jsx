import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
<div className="container">
 <div className="left-header">
<p>TASTY</p>
 </div>
 <div className="right-header">
  <ul>
    <li > <Link to="/">Home</Link></li>
    <li><Link to="/basket"><i class="fa-solid fa-basket-shopping"></i></Link></li>
    <li>Add</li>
  </ul>
 </div>
</div>
    </div>
  )
}

export default Header