import { Wrapper } from './FormInput.style';
interface iFormInput {
  label?: string;
  type: string;
  name: string;
  placeholder: string;
  displayName: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}

const FormInput: React.FC<iFormInput> = ({
  label,
  type,
  name,
  placeholder,
  displayName
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
          {...displayName}
        />
      </div>
    </Wrapper>
  );
};

export default FormInput;
