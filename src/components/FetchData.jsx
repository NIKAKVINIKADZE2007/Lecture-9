import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchData = React.memo(() => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log('Rendering...');
  let count = 0;
  for (let i = 0; i < 600000; i++) {
    count++;
  }

  if (loading) return <p>loading...</p>;

  return (
    <div>
      <h2>Fetching Data</h2>
      <p>Numbers of posts :</p>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
});

export default FetchData;
