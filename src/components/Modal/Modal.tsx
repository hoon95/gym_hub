import { Modal, Button } from '@mui/material';
import { Inner } from './Inner/Inner';
import { useModalStore } from '../../store/Store';

// Icons Load
import SendIcon from '@mui/icons-material/Send';

export const ButtonModal = () => {
  const { 
    open, setOpen,
    resetModal
  } = useModalStore();

  const handleOpen = () => setOpen(true);
  const handleClose = () => resetModal();

  return (
    <>
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
        className="modalContainer">
        <Inner />
      </Modal>
    </>
  );
}