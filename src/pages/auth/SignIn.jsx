// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Paper,
//   CircularProgress,
// } from '@mui/material';
// import { login } from '../../services/authService';

// const SignIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     setIsLoading(true);
//     setErrorMsg('');
//     try {
//       const data = await login(username, password);
//       localStorage.setItem('authToken', data.token);
//       localStorage.setItem('loggedInUser', JSON.stringify(data));
//       navigate('/dashboard');
//     } catch (err) {
//       setErrorMsg('Invalid username or password');
//     } finally {
//       setIsLoading(false);
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
//       <Paper elevation={3} sx={{ p: 4, width: 350, borderRadius: 2 }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Sign In
//         </Typography>

//         <Typography variant="body2" color="error" align="center">
//           {errorMsg}
//         </Typography>

//         <TextField
//           label="Username"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{ mt: 2 }}
//           onClick={handleLogin}
//           disabled={isLoading}
//         >
//           {isLoading ? <CircularProgress size={24} /> : 'Log In'}
//         </Button>
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

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMsg('All fields are required');
      return;
    }

    if (!validateEmail(username)) {
      setErrorMsg('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const data = await login(username, password);
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      navigate('/dashboard');
    } catch (err) {
      const message =
        err.response?.data?.message || 'Login failed. Try again.';
      setErrorMsg(message);
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
          label="Email"
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
