import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(setUser);
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
}
