import { Routes, Route } from 'react-router-dom';
import { SectionsContainer, Section } from 'react-fullpage';
import { GlobalStyle } from './common/GlobalStyle';
// import { HomePage } from './pages/HomePage';
// import { SearchPage } from './pages/SearchPage';
// import { ProgramPage } from './pages/ProgramPage';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';

const options = {
  activeClass: 'active', // the class that is appended to the sections links
  anchors: ['1', '2', '3'], // the anchors for each sections
  arrowNavigation: true, // use arrow keys
  delay: 900, // the scroll animation speed
  navigation: false, // use dots navigatio
  scrollBar: false, // use the browser default scrollbar
};

export const App = () => {
  return (
    <SectionsContainer {...options}>
      <GlobalStyle />
      <Navbar />

      <Section>
        <Home />
      </Section>

      <Section>

      </Section>

      <Section>
        <Footer />
      </Section>
    </SectionsContainer>
  );
}
