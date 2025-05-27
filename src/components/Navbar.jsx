// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <i className="icon nav"></i>
//       <h2>Dashboard</h2>
//     </nav>
//   );
// };

// export default Navbar;
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <Typography variant="h6">Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
