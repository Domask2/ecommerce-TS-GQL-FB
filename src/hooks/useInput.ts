import { useState } from 'react';

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue('');
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
