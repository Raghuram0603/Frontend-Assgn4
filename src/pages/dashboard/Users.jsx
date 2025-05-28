import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Link } from '@mui/material';
import { fetchAllUsers } from '../../services/userService';
import { Link as RouterLink } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchAllUsers()
      .then(usersData => {
        setUsers(usersData);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        setErrorMsg('Failed to load users');
      });
  }, []);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Users List
      </Typography>
      
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {errorMsg && (
            <Typography variant="body2" color="error" gutterBottom>
              {errorMsg}
            </Typography>
          )}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Profile</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>{`${user.address.city}, ${user.address.state}`}</TableCell>
                    <TableCell>{user.company.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Link
                        component={RouterLink}
                        to={`/profile/${user.id}`}
                        variant="body2"
                        color="primary"
                      >
                        View Profile
                      </Link>
                    </TableCell> 
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Paper>
  );
};

export default Users;
