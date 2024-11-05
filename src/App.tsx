import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './common/GlobalStyle';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { ProgramPage } from './pages/ProgramPage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/program' element={<ProgramPage />} />
      </Routes>
      <Footer />
    </>
  );
}