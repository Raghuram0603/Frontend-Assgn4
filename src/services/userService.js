const BASE_URL = `${process.env.REACT_APP_API_URL}/users`;

export const fetchAllUsers = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch users');
    return await res.json();
  } catch (err) {
    console.error('Fetch all users failed:', err);
    return [];
  }
};
export const fetchUserById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};
