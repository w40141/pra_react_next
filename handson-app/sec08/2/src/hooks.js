import { useState, useEffect } from "react";

export const useFetch = (uri) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return { loading, data, error };
};

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};
