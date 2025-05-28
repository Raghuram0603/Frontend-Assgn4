import { Typography, Paper } from '@mui/material';

const Permissions = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">User Permissions</Typography>
      <Typography>Read-only access</Typography>
    </Paper>
  );
};

export default Permissions;
