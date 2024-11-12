import styled from "@emotion/styled";

  export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  padding: 0 calc(var(--gap) * 5);

  img {
    width: 200px;
    height: 100px;
    object-fit: contain;
  }

  div {
    display: flex;
    justify-content: end;
    gap: var(--gap);
    padding: calc(var(--gap) * 2);

    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
`;