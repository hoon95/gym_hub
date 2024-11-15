import { SectionsContainer } from 'react-fullpage';
import { Home } from "../components/Home/Main";
import { Step } from "../components/Home/Step";
import { Footer } from "../components/Footer/Footer";

export const HomePage = () => {
  const options = {
    navigation: false,
    anchors: ['home', 'step', 'share'],
    delay: 900
  };

  return (
    <SectionsContainer {...options}>
      <Home />
      <Step />
      <Footer />
    </SectionsContainer>
  );
}