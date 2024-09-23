import { useEffect, useState } from 'react';
import api from './api';
function App2() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');

        setUsers(response.data);

        // if (!response.ok) throw new Error('Network response was not ok');
      } catch (error) {
        console.error('This is my Error: ', error);
      }
    };
    fetchUsers();
  }, []);

  const fetchUserById = async (id) => {
    try {
      const response = await api.get(`/users/${id}`);

      setUser(response.data);
    } catch (error) {
      console.error('This is my Error: ', error);
    }
  };

  return (
    <>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => {
            return (
              <li
                key={user.id}
                onClick={() => {
                  fetchUserById(user.id);
                }}
              >
                {user.name}
              </li>
            );
          })}
        </ul>
        {user && (
          <div>
            <h2>user Data</h2>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Address:</strong> {user.address.city}{' '}
              {user.address.street}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App2;
