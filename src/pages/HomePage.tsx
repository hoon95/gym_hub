import { SectionsContainer } from 'react-fullpage';
import styled from '@emotion/styled';
import { Home } from "../components/Home/Main/Main";
import { Step } from "../components/Home/Step/Step";
// import { Footer } from "../components/Footer/Footer";
import { Share } from 'components/Home/Share/Share';

export const HomePage = () => {
  const options = {
    navigation: false,
    anchors: ['home', 'step', 'share'],
    delay: 900,
  };

  return (
    <SectionsContainer {...options}>
      <Home />
      <Step />
      <Share />
      {/* <Footer /> */}
    </SectionsContainer>
  );
}