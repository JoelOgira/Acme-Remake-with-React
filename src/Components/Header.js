import React from 'react'

const Header = () => {
  return (
    <navbar className="navbar navbar-expand-sm py-4" style={{ borderBottom: '3px solid chocolate' }} >
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className='py-2'><span className='text-chocolate'>Windfall </span>Technologies</a>
        </div>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
                <a href="/create" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link">About</a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link">Contact</a>
            </li>
        </ul>
      </div>
    </navbar>
  )
}

export default Header;