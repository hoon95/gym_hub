import styled from "@emotion/styled";

export const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 99;
  /* background: rgba(0,0,0,.7); */
  padding: 0 calc(var(--gap) * 3);

  display: flex;
  justify-content: space-between;

  img {
    width: 200px;
    height: 100px;
    object-fit: contain;
  }

  ul {
    display: flex;
    justify-content: end;
    gap: var(--gap);
    padding: calc(var(--gap) * 2);

    a {
      color: var(--light);
      text-decoration: none;
    }
  }
`;