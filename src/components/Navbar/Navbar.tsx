import { NavbarContainer } from './Navbar.styled';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <img src="" alt="logo" />
      <div>
            <Link to="/">Home</Link>
            <Link to="/search">지점 찾기</Link>
            <Link to="/program">PT</Link>
      </div>
    </NavbarContainer>
  );
}