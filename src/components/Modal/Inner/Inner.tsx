import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Progress } from "./Progress";
import { useModalStore } from "../../../store/Store";
import { InnerStyle, Result } from "./Inner.styled";

const Input = () => {
  const { age, setAge } = useModalStore();

  return (
    <TextField
      label="Age"
      placeholder="현재 나이를 입력하세요"
      autoComplete="off"
      autoFocus
      type="text"
      value={age ? age : ""}
      onChange={(e) => {
        const inputVal = e.target.value;
        /^\d*$/.test(inputVal) // 숫자 제한
          ? Number(inputVal) < 200
            ? setAge(Number(inputVal))
            : "" // 범위 지정
          : "";
      }}
    />
  );
};

export const Inner = () => {
  const [initialAge, setInitialAge] = useState(0);

  const {
    age,
    quizStart,
    setQuizStart,
    currentQuestion,
    handleNextQuestion,
    qna,
    progress,
    finalResult,
    setFinalResult,
  } = useModalStore();

  const Start = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--gap)",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          당신의 신체 나이를 측정해보세요!
        </Typography>
        <Input />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setQuizStart(false);
            setFinalResult(age);
            setInitialAge(age);
          }}
          disabled={!age}
        >
          START
        </Button>
      </Box>
    );
  };
  const Qna = () => {
    return (
      <>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {qna[currentQuestion]?.question}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {qna[currentQuestion]?.answers.map((answer, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleNextQuestion(answer.weight)}
              className="answerBtn"
            >
              {answer.text}
            </Button>
          ))}
        </Box>
        <Progress />
      </>
    );
  };
  const End = () => {
    console.log(initialAge);
    console.log(age);

    const getStatusMessage = (initialAge: number, result: number) => {
      if (result <= initialAge) {
        return "정상입니다. 좋은 상태를 유지하세요!";
      }
      if (result > initialAge && result <= initialAge + 10) {
        return "주의가 필요합니다. 꾸준히 관리하세요.";
      }
      return "위험합니다. 건강 관리를 시작해야 합니다!";
    };

    return (
      <Result>
        <h3>당신의 신체나이는</h3>
        <p className="result">{finalResult}세</p>
        {getStatusMessage(initialAge, finalResult)}
      </Result>
    );
  };

  return (
    <Box sx={InnerStyle}>
      {quizStart ? <Start /> : progress === 100 ? <End /> : <Qna />}
    </Box>
  );
};
