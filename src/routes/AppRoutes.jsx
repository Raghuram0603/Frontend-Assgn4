import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import UserDetailsLayout from '../layouts/UserDetailsLayout';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import Dashboard from '../pages/dashboard/Dashboard';
import Users from '../pages/dashboard/Users';
import Documents from '../pages/user/Documents';
import Permissions from '../pages/user/Permissions';
import Info from '../pages/user/Info';
import Profile from '../pages/Profile';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  return token ? children : <Navigate to="/" />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />

    <Route
      path="/"
      element={
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      }
    >
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:userId" element={<UserDetailsLayout />}>
        <Route path="details" element={<Info />} />
        <Route path="documents" element={<Documents />} />
        <Route path="permissions" element={<Permissions />} />
      </Route>
      <Route path="profile/:id" element={<Profile />} />
    </Route>
  </Routes>
);

export default AppRoutes;
