// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/dashboard');
//   };

//   return (
//     <div className="signup-container">
//       <form onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//           required
//         />
//         <button type="submit">Sign Up</button>
//         <p>
//           or <a href="/">Sign In</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Link as MuiLink
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate new user and redirect
    const dummyUser = { name, id: Date.now() };
    localStorage.setItem('loggedInUser', JSON.stringify(dummyUser));
    navigate('/dashboard');
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f5f5f5"
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: 350,
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom align="center">
            Sign Up
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>
          <Typography variant="body2" align="center" mt={2}>
            or <MuiLink href="/">Sign In</MuiLink>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;
