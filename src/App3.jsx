import React, { useState, useEffect } from 'react';
import apiRequest from './apiRequest';
const App3 = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPizzas = async (signal) => {
    try {
      setLoading(false);
      const errMsg = await apiRequest('http://localhost:3500/items');

      if (errMsg) {
        throw new Error(errMsg);
      }

      const respose = await fetch('http://localhost:3500/items', signal);

      if (!respose.ok) {
        throw new Error('failed fetch');
      }

      setPizzas(pizzas);
    } catch (error) {
      if (error.name !== 'AbourtError') {
        console.error('Error fetching', error);
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  console.log(pizzas);

  return (
    <div>
      <h1>app3</h1>
    </div>
  );
};

export default App3;
