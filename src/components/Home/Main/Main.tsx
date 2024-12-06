import { HomeContainer } from './Main.styled';
import { ButtonModal } from '../../Modal/Modal';
import { GlobalStyle } from '../../../common/GlobalStyle';

export const Home = () => {
  return (
    <HomeContainer>
      <GlobalStyle />
      <img src={`${process.env.PUBLIC_URL}/img/logo_white.png`} alt="logo" className='logo' />
      <div className="textWrapper">
        <h2 className='title'>내 몸은 몇 살일까?</h2>
        <p className='desc'>자가진단 테스트</p>
        <ButtonModal />
      </div>
    </HomeContainer>
  );
}