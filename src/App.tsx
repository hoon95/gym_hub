import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./common/GlobalStyle";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
