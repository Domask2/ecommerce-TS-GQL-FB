import AuthWrapper from './../AuthWrapper/AuthWrapper';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';
// import { useHistory } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useState } from 'react';
// import { useActions } from '../../hooks/useAction';

const EmailPassword: React.FC = (props) => {
  // const dispatch = useDispatch();
  // const history = useHistory();

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  // useEffect(() => {
  //   if (resetPasswordSuccess) {
  //     resetAllAuthForms();
  //     history.push('/login');
  //   }
  // }, [resetPasswordSuccess, history, resetAllAuthForms]);

  // useEffect(() => {
  //   if (resetPasswordError.length > 0) {
  //     setError(resetPasswordError);
  //   }
  // }, [resetPasswordError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // dispatch(resetPassword(email));
  };

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
