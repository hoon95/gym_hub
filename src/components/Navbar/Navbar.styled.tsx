import styled from "@emotion/styled";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100px;

  div {
    display: flex;
    justify-content: end;
    gap: var(--gap);
    padding: 40px;

    a {
      color: #000;
      text-decoration: none;
    }
  }
`;