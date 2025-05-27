import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { fetchAllUsers } from "../services/userService";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "larger" }}>
                <strong>Name</strong>
              </TableCell>
              <TableCell style={{ fontSize: "larger" }}>
                <strong>Username</strong>
              </TableCell>
              <TableCell style={{ fontSize: "larger" }}>
                <strong>Email</strong>
              </TableCell>
              <TableCell style={{ fontSize: "larger" }}>
                <strong>Phone</strong>
              </TableCell>
              <TableCell style={{ fontSize: "larger" }}>
                <strong>Website</strong>
              </TableCell>
              <TableCell style={{ fontSize: "larger" }}>
                <strong>Company</strong>
              </TableCell>
              <TableCell style={{ fontSize: "larger" }}>
                <strong>Address</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
                <TableCell>{user.company.name}</TableCell>
                <TableCell>
                  {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Dashboard;
