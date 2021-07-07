import { FormWrap } from './SignUp.style';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';
import { auth, handleUserProfile } from '../../firebase/utils';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const resetForm = () => {
    setEmail('');
    setDisplayName('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password Don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await handleUserProfile(user, displayName);
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthWrapper headline="SignUp">
      <FormWrap>
        <form onSubmit={handleFormSubmit}>
          {error && (
            <ul>
              <li>{error}</li>
            </ul>
          )}

          <FormInput
            type="email"
            name="displayName"
            placeholder="Full name"
            value={displayName}
            handleChange={(e) => setDisplayName(e.target.value)}
          />

          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />

          <FormInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type="submit" pd="15px">
            Register
          </Button>
        </form>
      </FormWrap>
    </AuthWrapper>
  );
};

export default SignUp;
