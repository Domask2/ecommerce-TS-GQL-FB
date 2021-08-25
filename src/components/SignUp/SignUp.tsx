import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { signUpUserStart } from '../../redux/User/user.actions';

import { FormWrap, Links } from './SignUp.style';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const userError = useTypedSelector((state) => state.user.userErr);

  const [email, setEmail] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState([]);

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }
  }, [currentUser, history]);

  useEffect(() => {
    if (userError.length > 0) {
      setError(userError);
    }
  }, [userError]);

  const resetForm = () => {
    setEmail('');
    setDisplayName('');
    setPassword('');
    setConfirmPassword('');
    setError([]);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(signUpUserStart({ displayName, email, password, confirmPassword }));
  };

  const configAuthWrapper = {
    headline: 'Registration',
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <FormWrap>
        {error.length > 0 && (
          <ul>
            {error.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}

        <form onSubmit={handleFormSubmit}>
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

      <Links>
        <Link to="/registration">Register</Link>
        {` | `}
        <Link to="/recovery">Reset Password</Link>
      </Links>
    </AuthWrapper>
  );
};

export default SignUp;
