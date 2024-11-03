import React from 'react';
import { NavbarContainer } from './Navbar.styled';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/program">Programs</Link>
    </NavbarContainer>
  );
}

export default Navbar;