import { useState } from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Progress } from './Progress';
import { modalStyle } from './Modal.styled';

const qna = [
  { question: '하루에 얼마나 걷나요?', answers: ['10분 미만', '10분 이상 ~ 30분 미만', '30분 이상 ~ 1시간 미만', '1시간 이상']},
  { question: '일주일에 얼마나 숨차는 운동을 하나요?', answers: ['0회', '주 1~2회', '주 3~4회', '주 5회 이상']}
]

export const ButtonModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Question progress variant setting
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % qna.length);
    setProgress((oldProgress) => oldProgress + (100 / qna.length));
  };

  return (
    <div>
      <Button 
        onClick={handleOpen}
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}>
          START
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalContainer"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {qna[currentQuestion]?.question}
          </Typography>
          <Box sx={{ mt: 2 }}>
            {qna[currentQuestion]?.answers.map((answer, index) => (
              <Button variant="outlined" onClick={handleNextQuestion}>
                {answer}
              </Button>
            ))}
          </Box>
          <Progress progress={progress}/>
        </Box>
      </Modal>
    </div>
  );
}