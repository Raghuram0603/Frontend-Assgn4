// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Typography, Box, Paper, CircularProgress } from '@mui/material';
// import { fetchAllUsers } from '../../services/userService'; 

// const SignIn = () => {
//   const [users, setUsers] = useState([]);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchAllUsers()
//       .then(usersData => {
//         setUsers(usersData);
//         setIsLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setIsLoading(false);
//         setErrorMsg('Failed to load users');
//       });
//   }, []);

//   const handleLogin = () => {
//     const user = users.find(u => u.username === username);
    
//     if (user && user.password === password) {
//       localStorage.setItem('authToken', 'dummy-token');
//       localStorage.setItem('loggedInUser', JSON.stringify(user)); 
//       navigate('/dashboard');  
//     } else {
//       setErrorMsg('Invalid username or password');
//     }
//   };

//   return (
//     <Box
//       height="100vh"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       bgcolor="#f5f5f5"
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           padding: 4,
//           width: 350,
//           borderRadius: 2,
//           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         }}
//       >
//         <Typography variant="h5" gutterBottom align="center">
//           Sign In
//         </Typography>

//         {isLoading ? (
//           <CircularProgress />
//         ) : (
//           <>
//             <Typography variant="body2" align="center" color="error">
//               {errorMsg}
//             </Typography>

//             <TextField
//               label="Username"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <TextField
//               label="Password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <Button
//               variant="contained"
//               fullWidth
//               sx={{ mt: 2 }}
//               onClick={handleLogin}
//             >
//               Log In
//             </Button>
//           </>
//         )}
//       </Paper>
//     </Box>
//   );
// };

// export default SignIn;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from '@mui/material';
import { login } from '../../services/authService';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMsg('');
    try {
      const data = await login(username, password);
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      navigate('/dashboard');
    } catch (err) {
      setErrorMsg('Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ p: 4, width: 350, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign In
        </Typography>

        <Typography variant="body2" color="error" align="center">
          {errorMsg}
        </Typography>

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Log In'}
        </Button>
      </Paper>
    </Box>
  );
};

export default SignIn;
