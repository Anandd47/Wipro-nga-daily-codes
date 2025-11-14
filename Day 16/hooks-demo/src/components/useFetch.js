// Custom Hook to fetch data from an API
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);     // holds the fetched data
  const [loading, setLoading] = useState(true); // tracks loading state
  const [error, setError] = useState(null);     // tracks any error

  useEffect(() => {
    // reset states whenever URL changes
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(err);
        setLoading(false);
      });
  }, [url]);

  // Return all states so component can decide what to render
  return { data, loading, error };
};
