import AuthWrapper from './../AuthWrapper/AuthWrapper';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';
import { useHistory } from 'react-router';
import { auth } from '../../firebase/utils';
import { useState } from 'react';

const EmailPassword: React.FC = (props) => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string[]>([]);

  let history = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const config = {
        url: 'http://localhost:3000/login',
      };

      await auth
        .sendPasswordResetEmail(email, config)
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
