import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{
      width: '200px',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/dashboard/profile">Profile</Link></li>
      </ul>
    </div>
  );
}
