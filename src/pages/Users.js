import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td><td>{user.email}</td>
              <td><Link to={`/users/${user.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
