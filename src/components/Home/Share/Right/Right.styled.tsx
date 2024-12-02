import styled from "@emotion/styled";

export const RightContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 10vh);
    width: 40vw;
    gap: var(--gap);

    & .item {
        width: 100%;
        height: 100%;
        border-radius: var(--text-md);
        object-fit: cover;

        &.item-1 {
            grid-column: 1;
            grid-row: 1 / span 2;
        }
        &.item-2 {
            grid-column: 2;
            grid-row: 2 / span 3;
        }
        &.item-3 {
            grid-column: 1;
            grid-row: 4 / span 2;
        }
    }
`;