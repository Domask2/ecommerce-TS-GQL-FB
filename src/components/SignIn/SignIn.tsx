import { Wrapper } from './SignIn.style';
import Button from './../forms/Button/Button';
import { signInWithGoogle, auth } from './../../firebase/utils';
import FormInput from '../forms/FormInput/FormInput';
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
    <Wrapper>
      <div className="container">
        <h2>LogIn</h2>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <FormInput type="email" name="email" placeholder="Email" displayName={email} />

            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              displayName={password}
            />

            <div className="socialSignIn">
              <div className="row">
                <Button type="submit" pd="16px">
                  LOGIN
                </Button>
                <Button onClick={signInWithGoogle} otherProps="1">
                  <span className="icon"></span>
                  <p>Google</p>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
