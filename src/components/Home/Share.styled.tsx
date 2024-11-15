import styled from "@emotion/styled";

export const ShareContainer = styled.div`
    /* display: flex; */
`;

export const ShareContentWrapper = styled.div`
    display: flex;

    & .contentDesc {
        & .title {
            h2 {
                font-size: var(--text-md);
            }
            p {
                color: var(--gray-500);
            }
        }
    }
`;