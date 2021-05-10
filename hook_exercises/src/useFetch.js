import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  console.log(isPending);
  console.log(setIsPending);

  useEffect(() => {
    fetch(url)
        .then(res => {
            if(!res.ok) throw Error('could not fetch data for this resource');
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => setError(err.message))
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;