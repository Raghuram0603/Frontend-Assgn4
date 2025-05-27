import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(setUserData);
  }, [id]);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="profile">
      <h2 style={{ textAlign: "center" }}>{userData.name}</h2>
      <p>
        <i>✉️</i> <strong>Email:</strong> {userData.email}
      </p>

      <p>
        <i>👤</i> <strong>Username:</strong> {userData.username}
      </p>
      <p>
        <i>📞</i> <strong>Phone:</strong> {userData.phone}
      </p>
      <p>
        <i>🌐</i> <strong>Website:</strong> {userData.website}
      </p>
      <p>
        <i>🏢</i> <strong>Company:</strong> {userData.company.name}
      </p>
      <p>
        <i>📍</i> <strong>Address:</strong>{" "}
        {`${userData.address.street}, ${userData.address.city}`}
      </p>
    </div>
  );
};

export default Profile;
