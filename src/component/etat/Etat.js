import { useState } from "react";

function Etat(props) {
  const [values, setValues] = useState(props);
  const [error, setError] = useState({});

  const onchange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const videlechamps = (e) => {
    setValues(props);
    setError({});
  };
  return {
    values,
    setValues,
    onchange,
    error,
    setError,
    videlechamps,
  };
}

export default Etat;
