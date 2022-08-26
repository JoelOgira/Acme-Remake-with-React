import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date();

  return (
    <div className="sticky-footer text-center py-2 bg-dark text-chocolate">
      
      <div className="row my-2">
        <div className="col-md-4 col-lg-4">
          <h3>Quick Links</h3>
          <p className='my-2'>
            <Link to="/home">Home</Link>
          </p>
          <p className='my-2'>
            <Link to="/services">Services</Link>
          </p>
          <p className='my-2'>
            <Link to="/about">About</Link>
          </p>
          <p className='my-2'>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-4">
          <h3>Useful Links</h3>
          <p className='my-2'>
            <Link to="/rock">Rock</Link>
          </p>
          <p className='my-2'>
            <Link to="/card">Background Change</Link>
          </p>
          <p className='my-2'>
            <Link to="/contacts">Contact Management</Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-4">
          
        </div>
      </div>

      <p className='pt-2'>Windfall Technologies &copy; {year.getFullYear()} </p>
    </div>
  )
}

export default Footer;