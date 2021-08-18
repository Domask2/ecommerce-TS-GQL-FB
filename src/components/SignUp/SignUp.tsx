import { FormWrap } from './SignUp.style';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useAction';
import { signUpUserStart } from '../../redux/User/user.actions';


const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState([]);

  const currentUser = useTypedSelector(state => state.user.currentUser)
  const userError = useTypedSelector(state => state.user.userErr)

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
   
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    dispatch(signUpUserStart({displayName, email, password, confirmPassword}));
  };

  return (
    <AuthWrapper headline="SignUp">
      <FormWrap>
        <form onSubmit={handleFormSubmit}>
           {error.length > 0 && (
          <ul>
            {error.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              );
            })}
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
