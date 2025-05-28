import { Box, Tabs, Tab, Paper } from '@mui/material';
import { useNavigate, useParams, useLocation, Outlet } from 'react-router-dom';

const UserDetailsLayout = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentTab = pathname.split('/').pop();

  const handleChange = (_, newValue) => {
    navigate(`/users/${userId}/${newValue}`);
  };

  const tabStyle = (value) => ({
    m: 1,
    px: 3,
    py: 1.5,
    borderRadius: 2,
    boxShadow: value === currentTab ? 4 : 1,
    backgroundColor: value === currentTab ? '#e65100' : '#00e676',
    color: value === currentTab ? 'primary.contrastText' : 'black',
    textTransform: 'none',
    fontWeight: 500,
    transition: '0.3s',
  });

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Tab label="Details" value="details" onClick={() => handleChange(null, 'details')} sx={tabStyle('details')} />
        <Tab label="Documents" value="documents" onClick={() => handleChange(null, 'documents')} sx={tabStyle('documents')} />
        <Tab label="Permissions" value="permissions" onClick={() => handleChange(null, 'permissions')} sx={tabStyle('permissions')} />
      </Box>

      <Box sx={{ mt: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserDetailsLayout;
