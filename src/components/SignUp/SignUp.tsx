import { Wrapper } from './SignUp.style';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';
import { useState } from 'react';

const SignUp = () => {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  console.log(displayName);

  const handleChange = (e: any) => {
    setDisplayName(e.target.value);
  };

  return (
    <Wrapper>
      <div className="container">
        <h2>SignUp</h2>

        <form>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={handleChange}
          />
        </form>
      </div>
    </Wrapper>
  );
};

export default SignUp;
