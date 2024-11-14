import { NavbarContainer } from './Navbar.styled';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={`${process.env.PUBLIC_URL}/img/logo_white.png`} alt="logo" />
      <ul>
        <NavLink to="/" 
        className={({ isActive }) =>
          isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/find" 
        className={({ isActive }) =>
          isActive ? "active" : ""}>지점 찾기</NavLink>
        <NavLink to="/pt" 
        className={({ isActive }) =>
          isActive ? "active" : ""}>PT</NavLink>
      </ul>
    </NavbarContainer>
  );
}