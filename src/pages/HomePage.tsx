import { SectionsContainer } from 'react-fullpage';
import { Home } from "../components/Home/Main";
import { Step } from "../components/Home/Step";
import { Footer } from "../components/Footer/Footer";

const options = {
  activeClass: 'pageActive',
  anchors: ['1', '2', '3'],
  delay: 900,
};

export const HomePage = () => {
  return (
    <SectionsContainer {...options}>
      <Home />
      <Step />
      <Footer />
    </SectionsContainer>
  );
}