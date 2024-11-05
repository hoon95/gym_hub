import { NavbarContainer } from './Navbar.styled';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">소개</Link>
      <Link to="/search">지점 찾기</Link>
      <Link to="/program">PT</Link>
    </NavbarContainer>
  );
}