import { ChangeEvent, useState } from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, onChange, setValue] as [string, () => void, (tag: string) => void];
};

export default useInput;
