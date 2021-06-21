import { Wrapper } from './FormInput.style';

interface iFormInput {
  handleChange: () => void;
  label: any;
  otherProps: any;
}

const FormInput: React.FC<iFormInput> = ({ handleChange, label, ...otherProps }) => {
  return (
    <Wrapper>
      <div className="container">
        {label && <label>{label}</label>}

        <input className="formInput" onChange={handleChange} {...otherProps} />
      </div>
    </Wrapper>
  );
};

export default FormInput;
