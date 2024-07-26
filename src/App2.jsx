import React, { useState, useEffect } from 'react';

const App2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  //   //   useEffect(() => {
  //   //     fetch('https://jsonplaceholder.typicode.com/users')
  //   //       .then((responsive) => {
  //   //         if (!responsive.ok) {
  //   //           throw new Error('Network response was not ok');
  //   //         }
  //   //         return responsive.json();
  //   //       })
  //   //       .then((data) => {
  //   //         setUsers(data);
  //   //         setLoading(false);
  //   //       })
  //   //       .catch((error) => console.error('error data', error));
  //   //   }, []);
  //   console.log(users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error data,', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
};

export default App2;
