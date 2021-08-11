import { FormWrap } from './SignUp.style';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUpUser } from '../../redux/User/user.actions';
import { useTypedSelector } from '../../hooks/useTypeSelector';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const signUpSuccess = useTypedSelector((state) => state.user.signUpSuccess);
  const signUpError = useTypedSelector((state) => state.user.signUpError);

  useEffect(() => {
    if (signUpSuccess) {
      resetForm();
      history.push('/');
    }
  }, [signUpSuccess]);

  useEffect(() => {
    if (signUpError.length > 0) {
      setError(signUpError);
    }
  }, [signUpError]);

  const resetForm = () => {
    setEmail('');
    setDisplayName('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    dispatch(signUpUser(displayName, email, password, confirmPassword));
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
            type="text"
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
