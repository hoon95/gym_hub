import { Modal, Button, Box, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Progress } from './Progress';
import { modalStyle } from './Modal.styled';
import { useModalStore } from '../../store/Store';

export const ButtonModal = () => {
  const { 
    open, 
    setOpen, 
    currentQuestion, 
    progress, 
    handleNextQuestion,
    resetModal,
    qna 
  } = useModalStore();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    resetModal();
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
            {qna[currentQuestion]?.answers.map((answer: string, index: number) => (
              <Button
                key={index}
                variant="outlined" 
                onClick={handleNextQuestion}
                className="answerBtn"
              >
                {answer}
              </Button>
            ))}
          </Box>
          <Progress />
        </Box>
      </Modal>
    </div>
  );
}