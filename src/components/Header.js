import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand bg-dark navbar-dark fixed-top">
        <Link className="navbar-brand" to="/">Pokemon information</Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;