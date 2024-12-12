import styled from "@emotion/styled";

export const TypoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: calc(var(--gap) * 0.5);

  & .contact, .schedule {
    display: flex;
    gap: calc(var(--gap) * 0.2);
  }
`