import styled from "@emotion/styled";

export const StepContainer = styled.div`
  text-align: center;
  padding: calc(var(--gap) * 5) 0;

  h2 {
    font-size: var(--font-md);
    font-weight: bold;
    padding-bottom: var(--gap);
  }

  p {
    color: var(--gray-500);
  }

  .hashSlide {
    padding-top: calc(var(--gap) * 2);

    & .swiper-slide {
      font-size: calc(var(--font-md) * 1.2);
      color: var(--gray-300);
    }

    & .swiper-wrapper {
      transition-timing-function: linear;
    }
  }
`;