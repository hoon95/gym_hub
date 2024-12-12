import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  overflow-x: hidden;
  padding-bottom: calc(var(--gap) * 5);

  & .select {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap);
    padding-top: calc(var(--gap) * 3);

    & .header {
      display: flex;
      align-items: center;
      gap: calc(var(--gap) * 0.5);
      font-size: var(--text-md);
      color: var(--dark);
      font-weight: bold;
    }
  }
`

export const SearchHeader = styled.div<{ bgImage: string }>`
  position: relative;
  width: 100vw;
  height: 80vh;
  background: url(${ (props) => props.bgImage });

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

  & .logo {
    position: absolute;
    top: var(--gap);
    left: calc(var(--gap) * 5);
    z-index: 2;
  }

  & .textWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    color: var(--light);
    padding-bottom: calc(var(--gap) * 5);
    z-index: 2;

    .title {
      font-size: calc(var(--text-lg) * 1.5);
      font-weight: bold;
      padding-bottom: var(--gap);
    }
      
    .desc {
      font-size: calc(var(--text-sm) * 1.5);
      font-weight: regular;
      padding-bottom: var(--gap);
    }
  }
  
`;