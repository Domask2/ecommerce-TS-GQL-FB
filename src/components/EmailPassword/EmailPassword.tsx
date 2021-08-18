import { useEffect } from 'react';
import AuthWrapper from './../AuthWrapper/AuthWrapper';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useState } from 'react';
import { resetUserState, resetPasswordStart } from '../../redux/User/user.actions';

const EmailPassword: React.FC = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const resetPasswordSuccess= useTypedSelector(state => state.user.resetPasswordSuccess);
  const userErr = useTypedSelector(state => state.user.userErr);

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState([]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      history.push('/login');
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (userErr.length > 0) {
      setError(userErr);
    }

  }, [userErr]);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  }

  return (
    <AuthWrapper headline="Email Password">
      {error.length > 0 && (
        <ul>
          <li>{error}</li>
        </ul>
      )}

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />

        <Button type="submit" pd="15px">
          Email Password
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default EmailPassword;
