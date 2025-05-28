import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) setUserId(user.id);
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#e0e0e0', // grey background
        },
      }}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          sx={{
            bgcolor: '#009688',
            color: 'white',
            '&:hover': {
              bgcolor: '#1de9b6',
                color:'black'
            },
            padding:'1rem',
            marginBottom:'1rem'
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/users"
          sx={{
            bgcolor: '#009688',
            color: 'white',
            '&:hover': {
              bgcolor: '#1de9b6',
                color:'black'
            },
            padding:'1rem',
            marginBottom:'1rem'
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            <People />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>

        {userId && (
          <ListItem
            button
            component={Link}
            to={`/users/${userId}`}
            sx={{
              bgcolor: '#009688',
              color: 'white',
              '&:hover': {
                bgcolor: '#1de9b6',
                color:'black'
              },
              padding:'1rem',
            marginBottom:'1rem'
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
