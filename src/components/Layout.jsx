import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main className="outlet">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
