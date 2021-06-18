import { Wrapper } from './SignIn.style';
import Button from './../forms/Button/Button';

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>LogIn</h2>
        <div className="form-wrapper">
          <form>
            <div className="socialSignIn">
              <div className="row">
                <Button otherProps="1">
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
