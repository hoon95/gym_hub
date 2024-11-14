import styled from "@emotion/styled";

export const StepContainer = styled.div`
  text-align: center;
  padding-top: calc(var(--gap) * 10);

  h2 {
    font-size: var(--font-md);
    font-weight: bold;
    padding-bottom: var(--gap);
  }

  p {
    color: var(--gray-500);
  }

  .hashSlide {
    padding-top: calc(var(--gap) * 5);
  }
`;