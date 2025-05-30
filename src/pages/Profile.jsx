// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { fetchUserById } from '../services/userService';
// import { Typography, Paper, Box } from '@mui/material';

// const Profile = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getUser = async () => {
//       const data = await fetchUserById(id);
//       setUser(data);
//     };
//     getUser();
//   }, [id]);

//   if (!user) return <Typography>Loading...</Typography>;

//   return (
//     <Paper sx={{ p: 2 }}>
//       <Typography variant="h5">My Profile</Typography>
//       <Box mt={2}>
//         <Typography><strong>Full Name:</strong> {user.firstName} {user.lastName}</Typography>
//         <Typography><strong>Email:</strong> {user.email}</Typography>
//         <Typography><strong>Phone:</strong> {user.phone}</Typography>
//         <Typography><strong>Username:</strong> {user.username}</Typography>
//       </Box>
//     </Paper>
//   );
// };

// export default Profile;
import { useEffect, useState } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { getLoggedInUser } from '../services/authService';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getLoggedInUser();
        setUser(data);
      } catch {
        setUser(null);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5">My Profile</Typography>
      <Box mt={2}>
        <Typography><strong>Full Name:</strong> {user.firstName} {user.lastName}</Typography>
        <Typography><strong>Email:</strong> {user.email}</Typography>
        <Typography><strong>Phone:</strong> {user.phone}</Typography>
        <Typography><strong>Username:</strong> {user.username}</Typography>
      </Box>
    </Paper>
  );
};

export default Profile;
