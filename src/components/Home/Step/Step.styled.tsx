import styled from "@emotion/styled";

export const StepContainer = styled.div`
  text-align: center;
  padding: calc(var(--gap) * 2) 0;

  h2 {
    font-size: var(--text-md);
    font-weight: bold;
    padding-bottom: var(--gap);
  }

  p {
    color: var(--gray-500);
  }

  .hashSlide {
    padding: calc(var(--gap) * 2) 0 0 0;

    & .swiper-slide {
      font-size: calc(var(--text-md) * 1.2);
      color: var(--gray-300);
    }

    & .swiper-wrapper {
      transition-timing-function: linear;
    }
  }
`;