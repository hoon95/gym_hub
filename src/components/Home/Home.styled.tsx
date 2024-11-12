import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.7);
  background-image: url(${process.env.PUBLIC_URL}/img/home/home_bg.jpg);
  background-size: cover;
  color: #ffffff;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  gap: var(--gap);
  padding: 0 calc(var(--gap) * 5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    z-index: 1;
  }

  section {
    padding-bottom: calc(var(--gap) * 6);
    z-index: 2;
    .title {
      font-size: var(--font-lg);
      padding-bottom: var(--gap);
    }
      
    .desc {
      font-size: var(--font-md);
      padding-bottom: var(--gap);
    }
    
    .testBtn {
      width: 100px;
      border-radius: 15px;
    }
  }
`;