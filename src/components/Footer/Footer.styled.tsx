import styled from "@emotion/styled";

interface FooterProps {
  location: 'main' | 'sub';
}

export const FooterContainer = styled.footer<FooterProps>`
  position: absolute;
  left: ${(props) => (props.location === 'main' ? 'calc(var(--gap) * -5)' : 0)};
  width: ${(props) => (props.location === 'main' ? 'calc(100% + (var(--gap) * 10))' : '100%')};
  font-size: var(--text-sm);
  color: var(--light);
  background: var(--green-500);
  text-align: center;
  padding: var(--gap) 0;
`;