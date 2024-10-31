import { useState } from "react";

const useInputState = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //   return [value, handleChange];   //return as array

  return {
    value: value,
    onChange: handleChange, // retrun as object
  };
};

export default useInputState;
