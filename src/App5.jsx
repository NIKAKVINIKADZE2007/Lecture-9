import React, { useEffect, useState } from 'react';
import apiRequest from './apiRequest';
const App5 = () => {
  const [loading, setLoading] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState('');

  const fetchpizzas = async () => {
    const url = 'http://localhost:3500/items';
    setLoading(true);
    const data = await apiRequest(url);
    setLoading(false);

    if (data.error) {
      setError(data.error);
    } else {
      setPizzas(data);
    }
  };

  const addPizza = async () => {
    const url = 'http://localhost:3500/items';
    const newPizza = {
      name: 'axali pizza',
      size: 'large',
      price: 15,
      ingredients: ['tomato', 'peperoni'],
    };

    const option = {
      method: 'POST',
      Header: {
        'Content-type': 'aplication/json',
      },
      body: JSON.stringify(newPizza),
    };

    const data = await apiRequest(url, option);
    if (data.error) {
      setError(data.error);
    } else {
      setPizzas((prev) => [...prev, data]);
    }
  };

  useEffect(() => {
    fetchpizzas();
  }, []);
  console.log(pizzas);

  return (
    <div>
      <button onClick={addPizza}>Add Pizza</button>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h2>{pizza.name}</h2>
            <p>size: {pizza.size}</p>
            <p>price: {pizza.price}</p>
            <p>
              ingredients{' '}
              {pizza.ingredients
                ? pizza.ingredients.join(', ')
                : 'No ingredients listed'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App5;
