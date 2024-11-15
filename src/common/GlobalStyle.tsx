import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import PretendardRegularWoff2 from '../assets/fonts/pretendard/Pretendard-Regular.woff2';
import PretendardRegularWoff from '../assets/fonts/pretendard/Pretendard-Regular.woff';
import PretendardMediumWoff2 from '../assets/fonts/pretendard/Pretendard-Medium.woff2';
import PretendardMediumWoff from '../assets/fonts/pretendard/Pretendard-Medium.woff';
import PretendardBoldWoff2 from '../assets/fonts/pretendard/Pretendard-Bold.woff2';
import PretendardBoldWoff from '../assets/fonts/pretendard/Pretendard-Bold.woff';

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      :root {
        --text-lg: 3rem;
        --text-md: 2rem;
        --text-sm: 1rem;

        --gap: 1.5rem;

        --gray-500: #8a8585;
        --gray-300: #ebebeb;

        --light: #ffffff;
      }

      @font-face {
        font-family: 'Pretendard-Regular';
        src: url(${PretendardRegularWoff2}) format("woff2"),
             url(${PretendardRegularWoff}) format("woff");
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-Medium';
        src: url(${PretendardMediumWoff2}) format("woff2"),
             url(${PretendardMediumWoff}) format("woff");
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-Bold';
        src: url(${PretendardBoldWoff2}) format("woff2"),
             url(${PretendardBoldWoff}) format("woff");
        font-weight: 700;
        font-style: normal;
      }

      body {
        font-family: 'Pretendard-Regular', sans-serif;
        color: #333333;
        background-color: #ffffff;
        margin: 0;
      }
    `}
  />
);
