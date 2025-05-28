import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';

const Layout = () => (
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

export default Layout;
