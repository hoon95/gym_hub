import { Box, LinearProgress } from '@mui/material';

interface ProgressProps {
  progress: number;
}

export const Progress = ({ progress }: ProgressProps) => {
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
