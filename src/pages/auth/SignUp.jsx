// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Paper,
//   Link as MuiLink
// } from '@mui/material';
// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const SignUp = () => {
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const dummyUser = { ...form, id: Date.now() };
//     localStorage.setItem('loggedInUser', JSON.stringify(dummyUser));
//     navigate('/dashboard');
//   };

//   return (
//     <Box
//       height="100vh"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       bgcolor="#f5f5f5"
//     >
//       <Paper elevation={3} sx={{ p: 4, width: 400 }}>
//         <form onSubmit={handleSubmit}>
//           <Typography variant="h5" gutterBottom align="center">
//             Sign Up
//           </Typography>

//           <TextField
//             label="First Name"
//             name="firstName"
//             fullWidth
//             margin="normal"
//             value={form.firstName}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Last Name"
//             name="lastName"
//             fullWidth
//             margin="normal"
//             value={form.lastName}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Phone"
//             name="phone"
//             fullWidth
//             margin="normal"
//             value={form.phone}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             fullWidth
//             margin="normal"
//             value={form.email}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={form.password}
//             onChange={handleChange}
//           />

//           <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//             Register
//           </Button>

//           <Typography variant="body2" align="center" mt={2}>
//             Already have an account?{' '}
//             <MuiLink component={Link} to="/">
//               Sign In
//             </MuiLink>
//           </Typography>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default SignUp;
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Link as MuiLink,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some((val) => !val)) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(form.email)) {
      setError('Enter a valid email address');
      return;
    }

    const dummyUser = { ...form, id: Date.now() };
    localStorage.setItem('authToken', 'dummy-token');
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
      <Paper elevation={3} sx={{ p: 4, width: 400 }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom align="center">
            Sign Up
          </Typography>

          <Typography color="error" align="center">
            {error}
          </Typography>

          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            margin="normal"
            value={form.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            name="lastName"
            fullWidth
            margin="normal"
            value={form.lastName}
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            name="phone"
            fullWidth
            margin="normal"
            value={form.phone}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>

          <Typography variant="body2" align="center" mt={2}>
            Already have an account?{' '}
            <MuiLink component={Link} to="/">
              Sign In
            </MuiLink>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;
