import React from 'react';
import { Wrapper, FormRow } from './FormSelect.style';

interface Props {
  options: { value: string; name: string }[];
  defaultValue?: any;
  handleChange: (e: any) => void;
  label?: string;
  otherProps?: any;
}

const FormSelect: React.FC<Props> = ({
  options,
  defaultValue,
  handleChange,
  label,
  ...otherProps
}) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <Wrapper>
      <FormRow>
        {label && <label>{label}</label>}

        <select className="formSelect" value={defaultValue} onChange={handleChange} {...otherProps}>
          {options.map((option, index) => {
            const { value, name } = option;

            return (
              <option key={index} value={value}>
                {name}
              </option>
            );
          })}
        </select>
      </FormRow>
    </Wrapper>
  );
};

export default FormSelect;
