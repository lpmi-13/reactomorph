import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="btn btn-primary">home</Link>
      <Link to="/search" className="btn btn-primary">search</Link>
    </div>
  );
}

export default Header;
