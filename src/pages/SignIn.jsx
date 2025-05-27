import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      alert('User not found!');
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Login</button>
        <p>or <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default SignIn;
