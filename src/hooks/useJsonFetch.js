import { useState, useEffect } from 'react';

export default function useJsonFetch(url, method) {
  const [posts, setPosts] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);
  const [fetchReqFlag, setFetchReqFlag] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const response = await fetch(url, { method });
        const data = await response.json();

        if (!response.ok) {          
          throw new Error(data.status);
        }

        setPosts((prev) => [...data]);
      } catch (e) {
        setError(e.message);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchData();
  }, [fetchReqFlag]);

  return [
    posts, 
    setPosts, 
    isLoading, 
    hasError, 
    fetchReqFlag, 
    setFetchReqFlag,
    ];
}