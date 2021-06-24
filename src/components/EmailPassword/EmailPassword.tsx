import AuthWrapper from './../AuthWrapper/AuthWrapper';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';
import useInput from '../../hooks/useInput';
import { useHistory } from 'react-router';
import { auth } from '../../firebase/utils';
import { useState } from 'react';

const EmailPassword: React.FC = (props) => {
  const email = useInput('');
  let history = useHistory();
  const [error, setError] = useState<string[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const config = {
        url: 'http://localhost:3000/login',
      };

      await auth
        .sendPasswordResetEmail(email.value, config)
        .then(() => {
          history.push('/login');
        })
        .catch(() => {
          const err = ['Email not found. Please try again.'];
          setError(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthWrapper headline="Email Password">
      {error.length > 0 && (
        <ul>
          {error.map((e: string, index: number) => {
            return <li key={index}>{e}</li>;
          })}
        </ul>
      )}

      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" placeholder="Email" displayName={email} />

        <Button type="submit" pd="15px">
          Email Password
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default EmailPassword;
