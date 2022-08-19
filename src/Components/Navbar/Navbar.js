import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="navbar">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        <h4 className='head'>Home</h4>
        <h4 className='head0'>Movies</h4><select className="head2">
  <option className='movie' value="volvo" selected>Tamil</option>
  <option className='movie' value="saab">English</option>
  <option className='movie' value="opel">Malayalam</option>
  <option className='movie' value="audi">Hindi</option>
</select>
        <h4 className='head3'>Series</h4>
        <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default Navbar
