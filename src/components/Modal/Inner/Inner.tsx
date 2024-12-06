import { Box, Typography, TextField, Button } from '@mui/material';
import { Progress } from './Progress';
import { useModalStore } from '../../../store/Store';
import { InnerStyle } from './Inner.styled';

const Input = () => {
  const { age, setAge } = useModalStore();

  return(
    <TextField
      label="Age"
      placeholder="현재 나이를 입력하세요"
      autoComplete="off"
      autoFocus
      type="text"
      value={age ? age : ''}
      onChange={(e) =>
        {const inputVal = e.target.value;
          /^\d*$/.test(inputVal) ?    // 숫자 제한
          (Number(inputVal) < 200 ? setAge(Number(inputVal)) : '')    // 범위 지정
        : ''}
      }
    />
  )
};

export const Inner = () => {
  const {
    age,
    quizStart, setQuizStart,
    currentQuestion,
    handleNextQuestion,
    qna,
    progress,
    finalResult
  } = useModalStore();

  const Start = () => {
    return(
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--gap)' }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            당신의 신체 나이를 측정해보세요!
        </Typography>
        <Input />
        <Button
            variant="contained"
            color="primary"
            onClick={() => setQuizStart(false)}
            disabled={!age}>
            START
        </Button>
      </Box>
    )
  }
  const Qna = () => {
    return(
      <>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {qna[currentQuestion]?.question}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {qna[currentQuestion]?.answers.map((answer: string, index: number) => (
            <Button
              key={index}
              variant="outlined" 
              onClick={handleNextQuestion}
              className="answerBtn">
            {answer}
            </Button>
          ))}
        </Box>
        <Progress />
      </>
    )
  }
  const End = () => {
    return(
      <>
        <p>당신의 신체나이는?</p>
        <p>{finalResult}세</p>
      </>
    )
  }

  return(
    <Box sx={ InnerStyle }>
      {quizStart ? <Start /> : progress === 100 ? <End /> : <Qna /> }
    </Box>
  )
}