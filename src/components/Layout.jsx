// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';

// const Layout = () => {
//   return (
//     <div className="container">
//       <Sidebar />
//       <div className="main-content">
//         <Navbar />
//         <main className="outlet">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1}>
        <Navbar />
        <Box component="main" p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
