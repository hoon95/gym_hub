import React, { useState } from 'react';
import { Section } from 'react-fullpage';
import { HomeContainer } from './Home.styled';
import { Modal } from '../Modal/Modal';
import { GlobalStyle } from '../../common/GlobalStyle';
import { Button } from '@mui/material';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Section>
      <HomeContainer>
        <GlobalStyle />
        <section>
          <h2 className='title'>내 몸은 몇 살일까?</h2>
          <p className='desc'>자가진단 테스트</p>
          <Button onClick={openModal} variant="outlined" color="primary" className='testBtn'>Click</Button>
          {isModalOpen && <Modal closeModal={closeModal} />}
        </section>
        
      </HomeContainer>
    </Section>
  );
}