// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await res.json();
//     const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());

//     if (user) {
//       localStorage.setItem('loggedInUser', JSON.stringify(user));
//       navigate('/dashboard');
//     } else {
//       alert('User not found!');
//     }
//   };

//   return (
//     <div className="signin-container">
//       <form onSubmit={handleSubmit}>
//         <h2>Sign In</h2>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//           required
//         />
//         <button type="submit">Login</button>
//         <p>or <a href="/signup">Sign Up</a></p>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
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

const SignIn = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const user = users.find((u) => u.name.toLowerCase() === name.toLowerCase());

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      alert('User not found!');
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
            Sign In
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
            Login
          </Button>
          <Typography variant="body2" align="center" mt={2}>
            or <MuiLink href="/signup">Sign Up</MuiLink>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default SignIn;
