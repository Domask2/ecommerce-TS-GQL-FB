import { SocialSignIn } from './SignIn.style';
import Button from './../forms/Button/Button';
import { signInWithGoogle, auth } from './../../firebase/utils';
import FormInput from '../forms/FormInput/FormInput';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import useInput from '../../hooks/useInput';

const SignIn: React.FC = () => {
  const email = useInput('');
  const password = useInput('');

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      email.reset();
      password.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthWrapper headline="LogIn">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <FormInput type="email" name="email" placeholder="Email" displayName={email} />

            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              displayName={password}
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

          </form>
        </div>
      </AuthWrapper>
  );
};

export default SignIn;
