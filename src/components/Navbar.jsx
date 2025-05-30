// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// const Navbar = () => {
//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = '/';
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Dashboard
//         </Typography>
//         <Button color="inherit" onClick={handleLogout}>
//           Logout
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          User Management
        </Typography>
        <Box>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
