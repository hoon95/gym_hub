import { Section } from 'react-fullpage';
import { Left } from './Left/Left';
import { Right } from './Right/Right';
import { Footer } from 'components/Footer/Footer';
import { Container, Wrapper } from "./Share.styled";


export const Share = () => {
  return(
    <Section>
      <Container>
        <Wrapper>
          <Left />
          <Right />
        </Wrapper>
      </Container>
      <Footer />
    </Section>
  )
};