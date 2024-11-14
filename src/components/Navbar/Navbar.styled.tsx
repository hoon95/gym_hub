import styled from "@emotion/styled";

  export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  padding: 0 calc(var(--gap) * 5);

  .active {
    font-weight: bold;
  }

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
      color: #ffffff;
      text-decoration: none;
    }
  }
`;