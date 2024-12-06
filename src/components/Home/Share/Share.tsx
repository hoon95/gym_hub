import { Left } from './Left/Left';
import { Right } from './Right/Right';
import { Footer } from 'components/Footer/Footer';
import { Container, Wrapper } from "./Share.styled";


export const Share = () => {
  return(
    <>
      <Container>
        <Wrapper>
          <Left />
          <Right />
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
};