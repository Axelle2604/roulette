import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <h1>Roulette</h1>
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/admin'}>Admin</Link>
      </div>
    </div>
  );
};

export default Header;
