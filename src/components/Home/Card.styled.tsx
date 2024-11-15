import styled from "@emotion/styled";

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: var(--gap);
    padding: 0 calc(var(--gap) * 5);

    & .content {
        min-height: calc(var(--gap) * 5);

        & .title {
            min-height: calc(var(--gap) * 3);
            font-size: calc(var(--text-sm) * 1.2);
            font-weight: bold;
        }
    
        & .desc {
            color: var(--gray-500);
        }
    }

`;