import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFetchedData = async () => {
    try {
      const fetchedUrl = await axios(url);
      setData(fetchedUrl.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchedData();
  }, []);

  return { data, loading, error };
};

export default UseFetch;
