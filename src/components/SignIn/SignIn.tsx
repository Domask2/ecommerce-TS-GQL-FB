import { Wrapper } from './SignIn.style';
import Button from './../forms/Button/Button';
import { signInWithGoogle } from './../../firebase/utils';
import FormInput from '../forms/FormInput/FormInput';

const SignIn: React.FC = () => {
  async function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <div className="container">
        <h2>LogIn</h2>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="socialSignIn">
              <div className="row">
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
