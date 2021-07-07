import { SocialSignIn, Links } from './SignIn.style';
import Button from './../forms/Button/Button';
import { signInWithGoogle, auth } from './../../firebase/utils';
import { Link } from 'react-router-dom';
import FormInput from '../forms/FormInput/FormInput';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import { useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      console.log(error);
    }
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
