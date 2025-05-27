// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Sidebar = () => {
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (user) setUserId(user.id);
//   }, []);

//   return (
//     <div className="sidebar">
//       <h1>User Management</h1>
//       <Link to="/dashboard">
//         <i className="icon dashboard"></i>Users
//       </Link>
//       {userId && (
//         <Link to={`/profile/${userId}`}>
//           <i className="icon dashboard"></i>Profile
//         </Link>
//       )}
//     </div>
//   );
// };

// export default Sidebar;
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Dashboard, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) setUserId(user.id);
  }, []);

  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List sx={{ width: 240 }}>
        <ListItem>
          <Typography variant="h6">MyApp</Typography>
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {userId && (
          <ListItem button component={Link} to={`/profile/${userId}`}>
            <ListItemIcon><AccountCircle /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
