import React, { useState } from 'react';
import { Section } from 'react-fullpage';
import { HomeContainer } from './Home.styled';
import { ButtonModal } from '../Modal/Modal';
import { GlobalStyle } from '../../common/GlobalStyle';

export const Home = () => {
  return (
    <Section>
      <HomeContainer>
        <GlobalStyle />
        <div className="textWrapper">
          <h2 className='title'>내 몸은 몇 살일까?</h2>
          <p className='desc'>자가진단 테스트</p>
          <ButtonModal />
        </div>
      </HomeContainer>
    </Section>
  );
}