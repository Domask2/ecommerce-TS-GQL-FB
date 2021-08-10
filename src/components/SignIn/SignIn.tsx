import { SocialSignIn, Links } from './SignIn.style';
import Button from './../forms/Button/Button';
import { signInWithGoogle, auth } from './../../firebase/utils';
import { Link } from 'react-router-dom';
import FormInput from '../forms/FormInput/FormInput';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../../hooks/useAction';
import { signInUser } from '../../redux/User/user.actions';
import { signInSuccess } from '../../redux/User/user.actions';

const SignIn: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signInSuccess } = useActions();

  const resetForm = () => {
    setEmail('');
    setPassword('');

  };
  
  async function handleSubmit(e: any) {
    e.preventDefault();
    resetForm();
    history.push('/');

    signInUser(email, password);
    signInSuccess(true);
  }

  return (
    <AuthWrapper headline="LogIn">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
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

          <SocialSignIn>
            <div className="row">
              <Button type="submit" pd="16px">
                LOGIN
              </Button>
              <Button onClick={signInWithGoogle} otherProps="1">
                <span className="icon"></span>
                <p>Google</p>
              </Button>
            </div>
          </SocialSignIn>

          <Links>
            <Link to="/recovery">Reset Pasword</Link>
          </Links>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
