import { Wrapper } from './FormInput.style';

interface iFormInput {
  handleChange: any;
  label?: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
}

const FormInput: React.FC<iFormInput> = ({
  handleChange,
  label,
  type,
  name,
  value,
  placeholder,
}) => {
  return (
    <Wrapper>
      <div className="container">
        {label && <label>{label}</label>}

        <input
          className="formInput"
          onChange={handleChange}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </Wrapper>
  );
};

export default FormInput;
