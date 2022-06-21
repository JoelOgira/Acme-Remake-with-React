import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <navbar className="navbar navbar-expand-sm py-4 bg-dark" style={{ borderBottom: '3px solid chocolate' }} >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className='py-2'><span className='text-chocolate'>Windfall </span>Technologies</Link>
        </div>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>
      </div>
    </navbar>
  )
}

export default Header;