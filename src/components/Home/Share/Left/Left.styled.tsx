import styled from "@emotion/styled";

export const LeftContainer = styled.section`
    .community {
        color: var(--green-500);
        font-size: calc(var(--text-sm) * 1.5);
        font-weight: bold;
        padding-bottom: var(--gap);
    }

    .title {
        h2 {
            font-size: var(--text-md);
            font-weight: bold;
        }
        p {
            color: var(--gray-500);
            padding: calc(var(--gap) * 0.5) 0 var(--gap) 0;
        }
    }

    /* LeftBtn */
    .btnContainer {
        display: flex;
        gap: var(--gap);
    
        & .wod, .diet {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc(var(--gap) * 0.5);
        }
    }
`;

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    width: 30vw;
    padding-top: calc(var(--gap) * 2);
    
`;