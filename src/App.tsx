import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './common/GlobalStyle';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { ProgramPage } from './pages/ProgramPage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <button onClick={openModal}>신체나이 테스트 시작하기</button>
      {isModalOpen && <Modal closeModal={closeModal} />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/program' element={<ProgramPage />} />
      </Routes>
      <Footer />
    </>
  );
}
