import { FooterContainer } from './Footer.styled';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  const getLocation = () => {
    return(
      location.pathname === '/search' ? 'sub' : 'main'
    )
  }

  return (
    <FooterContainer location={getLocation()}>
      <p>© 2024 Gymhub. All rights reserved.</p>
    </FooterContainer>
  );
}