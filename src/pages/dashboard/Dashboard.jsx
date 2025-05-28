// import { Typography } from '@mui/material';

// const Dashboard = () => {
//   return (
//     <Typography variant="h4">Welcome to the Dashboard</Typography>
//   );
// };

// export default Dashboard;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return <h2>Welcome to the Dashboard!</h2>;
};

export default Dashboard;
