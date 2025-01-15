import { useState, useEffect } from "react";

const useApi = (endpoint, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const options = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
        };
        if (body) options.body = JSON.stringify(body);

        const response = await fetch(endpoint, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, body]);

  return { data, loading, error };
};

export default useApi;
