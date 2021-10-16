import { WrapperForm } from './FormInput.style';

interface iFormInput {
  label?: string;
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  productName?: any;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: any;
  max?: any;
  step?: any;
  displayName?: any;
  required?: any;
}

const FormInput: React.FC<iFormInput> = ({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  min,
  max,
  step,
  displayName,
  required
}) => {
  return (
    <WrapperForm>
      <div className="container">
        {label && <label>{label}</label>}

        <input
          className="formInput"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          required
          {...displayName}
        />
      </div>
    </WrapperForm>
  );
};

export default FormInput;
