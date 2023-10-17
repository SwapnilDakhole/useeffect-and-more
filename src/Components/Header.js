import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='list'>
        <Router>
          <Link to={'/'}>
            <h1>Home</h1>
          </Link>
          <Link to={'/about'}>
            <h1>About</h1>
          </Link>
          <Link to={'/contact'}>
            <h1>Contact</h1>
          </Link>
        </Router>
      </div>
    </div>
  );
};

export default Header;
