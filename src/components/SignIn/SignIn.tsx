import { SocialSignIn, Links } from './SignIn.style';
import Button from './../forms/Button/Button';
import { signInWithGoogle } from './../../firebase/utils';
import { Link } from 'react-router-dom';
import FormInput from '../forms/FormInput/FormInput';
import AuthWrapper from '../AuthWrapper/AuthWrapper';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../redux/User/user.actions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';

const SignIn: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const signInSuccess = useTypedSelector((state) => state.user.signInSuccess);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      history.push('/');
    }
  }, [signInSuccess]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signInUser(email, password));
  };

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
