import styled from "@emotion/styled";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  z-index: 99;
  padding: 0 calc(var(--gap) * 3);

  & .MuiButtonBase-root {
    margin-top: var(--gap);

    & .MuiSvgIcon-root {
      color: var(--dark);
      font-size: var(--text-md);
  
      &.move {
        color: var(--light);
      }
    }
  }

`;

export const NavbarOpen = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: center;
  width: 15vw;
  padding-top: var(--gap);
  overflow: hidden;

  & .closeBtn {
    color: var(--dark);
    cursor: pointer;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    width: 90%;
    color: var(--dark);
    font-size: calc(var(--text-sm) * 1.5);
    text-decoration: none;
    padding: calc(var(--gap) * 0.5);
    border-radius: 0.5rem;

    &:hover {
      color: var(--light);
      background-color: var(--green-500);
  
      a {
        color: var(--light);
      }
    }
  }
`;