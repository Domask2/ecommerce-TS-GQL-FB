import { Wrapper } from './FormInput.style';

interface iFormInput {
  label?: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // displayName: {
  //   value: string;
  //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // }
}

const FormInput: React.FC<iFormInput> = ({
  label,
  type,
  name,
  placeholder,
  // displayName,
  value,
  handleChange,
}) => {
  return (
    <Wrapper>
      <div className="container">
        {label && <label>{label}</label>}

        <input
          className="formInput"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          // {...displayName}
        />
      </div>
    </Wrapper>
  );
};

export default FormInput;
