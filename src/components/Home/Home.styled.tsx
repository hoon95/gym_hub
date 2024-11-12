import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap);

  height: 90vh;
  padding: 0 calc(var(--gap) * 5);

  .title {
    font-size: var(--font-lg);
  }
    
  .desc {
    font-size: var(--font-md);
  }

  .testBtn {
    width: 100px;
    border-radius: 15px;
  }
`;