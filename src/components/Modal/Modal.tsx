import React, { useState } from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { modalStyle } from './Modal.styled'; 

export const ButtonModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            하루에 얼마나 걷나요?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}