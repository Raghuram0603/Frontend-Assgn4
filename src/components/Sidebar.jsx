import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) setUserId(user.id);
  }, []);

  return (
    <div className="sidebar">
      <h1>User Management</h1>
      <Link to="/dashboard">
        <i className="icon dashboard"></i>Users
      </Link>
      {userId && (
        <Link to={`/profile/${userId}`}>
          <i className="icon dashboard"></i>Profile
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
