import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchApi = () => {
    axios(url)
      .then((response) => {
        if (response.error) {
          setError(response.error || "Server error"); // I am not sure which variable api return the error message. Now I am assuming api return error variable in response. in case variable not match then throw "Server error"
        } else {
          const result = response?.data?.results;
          setLoading(false);
          setData(result);
        }
      })
      .catch((error) => {
        setError(error?.message || "Server error"); // I am not sure which variable api return the error message. Now I am assuming api return message variable in error. in case variable not match then throw "Server error"
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data, error };
};

export default useApi;
