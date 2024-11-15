import { useState } from 'react';
import { NavbarContainer } from './Navbar.styled';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <img src={`${process.env.PUBLIC_URL}/img/logo_white.png`} alt="logo" />
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
        <MenuIcon className="hamburger" />
      </IconButton>
      
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/search" className={({ isActive }) => isActive ? "active" : ""}>지점 찾기</NavLink>
          </li>
          <li>
            <NavLink to="/pt" className={({ isActive }) => isActive ? "active" : ""}>PT</NavLink>
          </li>
        </ul>
      </Drawer>
    </NavbarContainer>
  );
};
