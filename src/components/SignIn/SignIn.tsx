import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { Link, useHistory } from 'react-router-dom';
//action
import { emailSignInStart, googleSignInStart } from '../../redux/User/user.actions';
//style
import { SocialSignIn, Links } from './SignIn.style';
//Components
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import Button from './../forms/Button/Button';
import FormInput from '../forms/FormInput/FormInput';

const SignIn: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const configAuthWrapper = {
    headline: 'LogIn',
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
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
              <Button onClick={handleGoogleSignIn} otherProps="1">
                <span className="icon"></span>
                <p>Google</p>
              </Button>
            </div>
          </SocialSignIn>

          <Links>
            <Link to="/registration">Register</Link>
            {` | `}
            <Link to="/recovery">Reset Password</Link>
          </Links>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
