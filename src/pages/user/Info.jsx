import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/userService';
import { Typography, Paper, Box } from '@mui/material';

const Info = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUserById(userId);
      setUser(data);
    };
    getUser();
  }, [userId]);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">User Info</Typography>
      <Box mt={2}>
        <Typography><strong>Name:</strong> {user.firstName} {user.lastName}</Typography>
        <Typography><strong>Email:</strong> {user.email}</Typography>
        <Typography><strong>Phone:</strong> {user.phone}</Typography>
        <Typography><strong>Username:</strong> {user.username}</Typography>
      </Box>
    </Paper>
  );
};

export default Info;
