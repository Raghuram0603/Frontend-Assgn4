// import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
// import { Box } from '@mui/material';

// const Layout = () => (
//   <Box display="flex">
//     <Sidebar />
//     <Box flexGrow={1}>
//       <Navbar />
//       <Box p={2}>
//         <Outlet />
//       </Box>
//     </Box>
//   </Box>
// );

// export default Layout;
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Box, CircularProgress } from '@mui/material';
import { getLoggedInUser } from '../services/authService';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/');
        return;
      }

      try {
        const user = await getLoggedInUser();
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        setIsLoading(false);
      } catch (error) {
        localStorage.clear();
        navigate('/');
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return (
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1}>
        <Navbar />
        <Box p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
