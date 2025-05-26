import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <Link to="/users">Users</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
