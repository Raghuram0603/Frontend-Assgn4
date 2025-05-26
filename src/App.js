import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Main Layout (top nav) */}
      <Route element={<Layout />}>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Route>

      {/* Dashboard Sidebar Layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
