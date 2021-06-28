import { useState } from 'react';

export default function useInput(initialValue:string) {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
    reset,
  };
}
