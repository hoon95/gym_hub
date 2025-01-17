import styled from "@emotion/styled";

export const InnerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: "20vw",
  p: 4,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& .answerBtn": {
    width: "100%",
    marginBottom: "0.5rem",
  },
};

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: center;

  h3 {
    font-size: calc(var(--text-md) * 0.7);
  }

  & .result {
    font-size: var(--text-md);
  }
`;
