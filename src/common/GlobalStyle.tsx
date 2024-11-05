import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url("../assets/fonts/pretendard/Pretendard-Regular.woff2") format("woff2"),
         url("../assets/fonts/pretendard/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Medium';
    src: url("../assets/fonts/pretendard/Pretendard-Medium.woff2") format("woff2"),
         url("../assets/fonts/pretendard/Pretendard-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url("../assets/fonts/pretendard/Pretendard-Bold.woff2") format("woff2"),
         url("../assets/fonts/pretendard/Pretendard-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Pretendard-Regular', sans-serif;
    background-color: #ffffff;
    color: #333333;
  }
`;