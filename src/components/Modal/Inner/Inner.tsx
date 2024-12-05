import { Box, Typography, TextField, Button } from '@mui/material';
import { Progress } from './Progress';
import { useModalStore } from '../../../store/Store';
import { InnerStyle } from './Inner.styled';


export const Inner = () => {
  const {
    quizStart, setQuizStart,
    age, setAge,
    currentQuestion,
    handleNextQuestion,
    qna
  } = useModalStore();

  return(
    <Box sx={InnerStyle}>
      {quizStart
        ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--gap)' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                당신의 신체 나이를 측정해보세요!
            </Typography>
            <TextField
                label="Age"
                placeholder="현재 나이를 입력하세요"
                autoComplete="off"
                type="text"
                value={age ? age : ''}
                onChange={(e) =>
                {const inputVal = e.target.value;
                    /^\d*$/.test(inputVal) ?    // 숫자 제한
                    (Number(inputVal) < 200 ? setAge(Number(e.target.value)) : '')    // 범위 지정
                    : ''
                }
                }/>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setQuizStart(false)}
                disabled={!age}>
                START
            </Button>
            </Box> 
            )
        : (
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
    </Box>
  )
}