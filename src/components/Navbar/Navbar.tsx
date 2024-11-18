import { useState } from 'react';
import { NavbarContainer, NavbarOpen } from './Navbar.styled';
import { NavLink } from 'react-router-dom';
import { IconButton, Drawer, Divider } from '@mui/material';

// Icon Load
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
        <MenuIcon />
      </IconButton>
      
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <NavbarOpen>
          {/* <IconButton onClick={toggleMenu} className="closeBtn">
            <CloseIcon />
          </IconButton> */}
          <NavLink to="/" onClick={toggleMenu}>
            <HomeIcon />
            <span>Home</span>
          </NavLink>
          
          <NavLink to="/search" onClick={toggleMenu}>
            <LocationOnIcon />
            <span>지점 찾기</span>
          </NavLink>
          
          <NavLink to="/pt" onClick={toggleMenu}>
            <PeopleAltIcon />
            <span>PT+</span>
          </NavLink>
        </NavbarOpen>
      </Drawer>
    </NavbarContainer>
  );
};
