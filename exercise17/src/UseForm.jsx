import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const ChangeBtn = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return { values, ChangeBtn };
};

export default useForm;
