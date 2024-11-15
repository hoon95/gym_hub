import styled from "@emotion/styled";
import mainBg from "../../assets/img/home/main_bg.png";

export const HomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: calc(var(--gap) * -5);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.7);
  background-image: url(${mainBg});
  background-size: cover;
  color: #ffffff;
  padding: 0 calc(var(--gap) * 5);

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  gap: var(--gap);

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

  .textWrapper {
    z-index: 2;
    padding-bottom: calc(var(--gap) * 5);

    .title {
      font-size: var(--text-lg);
      font-weight: bold;
      padding-bottom: var(--gap);
    }
      
    .desc {
      font-size: var(--text-md);
      font-weight: regular;
      padding-bottom: var(--gap);
    }
    
    .testBtn {
      width: 100px;
      border-radius: 15px;
    }
  }

`;