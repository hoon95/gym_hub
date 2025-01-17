import { useState } from "react";
import { NavbarContainer, NavbarOpen } from "./Navbar.styled";
import { NavLink, useLocation } from "react-router-dom";
import { IconButton, Drawer } from "@mui/material";

// Icon Load
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const getIconColor = () => {
    return (location.pathname === "/" &&
      (location.hash === "#home" || location.hash === "")) ||
      location.pathname === "/search"
      ? "#fff"
      : "#000";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <IconButton edge="start" aria-label="menu" onClick={toggleMenu}>
        <MenuIcon sx={{ color: getIconColor() }} />
      </IconButton>

      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <NavbarOpen>
          <NavLink to="/" onClick={toggleMenu}>
            <HomeIcon />
            <span>Home</span>
          </NavLink>

          <NavLink to="/search" onClick={toggleMenu}>
            <LocationOnIcon />
            <span>지점 찾기</span>
          </NavLink>
        </NavbarOpen>
      </Drawer>
    </NavbarContainer>
  );
};
