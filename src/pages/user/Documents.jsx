import { Typography, Paper } from '@mui/material';

const Documents = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">User Documents</Typography>
      <Typography>No documents available.</Typography>
    </Paper>
  );
};

export default Documents;
