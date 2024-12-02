import styled from "@emotion/styled";

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: var(--gap);

    & .content {
        /* min-height: calc(var(--gap) * 3); */

        & .title {
            min-height: calc(var(--gap) * 2);
            font-size: calc(var(--text-sm) * 1.2);
            font-weight: bold;
        }
    
        & .desc {
            color: var(--gray-500);
        }
    }

`;