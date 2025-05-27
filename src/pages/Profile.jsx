import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Paper,
  Stack,
  CircularProgress
} from "@mui/material";
import {
  Email,
  Phone,
  Language,
  LocationOn,
  Business,
  AccountCircle
} from "@mui/icons-material";
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import { fetchUserById } from "../services/userService";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserById(id).then(setUserData).catch(console.error);
  }, [id]);

  if (!userData) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 600 }}>
        <Stack spacing={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <AccountCircle color="primary" />
            <Typography variant="h5" fontWeight="bold">
              {userData.name}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Email color="action" />
            <Typography>{userData.email}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <PersonOutlineTwoToneIcon />
            <Typography variant="body1">Username:</Typography>
            <Typography>{userData.username}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Phone color="action" />
            <Typography>{userData.phone}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Language color="action" />
            <Typography>{userData.website}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Business color="action" />
            <Typography>{userData.company.name}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <LocationOn color="action" />
            <Typography>
              {`${userData.address.street}, ${userData.address.city}`}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Profile;
