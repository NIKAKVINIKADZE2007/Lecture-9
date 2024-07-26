import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((responsive) => {
        if (!responsive.ok) {
          throw new Error('Network response was not ok');
        }
        return responsive.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error('error data', error));
  }, []);
  console.log(users);

  if (loading) {
    return <p>Loading ....</p>;
  }

  return (
    <>
      <div>
        <h1>User List</h1>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })}
          </ul>
        ) : (
          <p>Names not found</p>
        )}
      </div>
    </>
  );
}

export default App;
