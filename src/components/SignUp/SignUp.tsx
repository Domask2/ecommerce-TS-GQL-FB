import { Wrapper } from "./SignUp.style";
import FormInput from "../forms/FormInput/FormInput";
import Button from "../forms/Button/Button";
import useInput from "../../hooks/useInput";
import { auth, handleUserProfile } from "../../firebase/utils";
import { useState } from "react";

const SignUp = () => {
  const displayName= useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const [error, setError] = useState<string>('');

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    
    if ( password.value !== confirmPassword.value) {
      setError('Password Don\'t match')
      return;
    }
    
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email.value,  password.value)
      await handleUserProfile(user, displayName.value )

      displayName.reset();
      email.reset();
      password.reset();
      confirmPassword.reset();
       
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Wrapper>
      <div className="container">
        <h2>SignUp</h2>

        { error && (
          <ul>
            <li>
              {error}
            </li>
          </ul>
        )}

        <div className="formWrap">
          <form onSubmit={handleFormSubmit}>
            <FormInput
              type="text"
              name="displayName"
              placeholder="Full name"
              displayName={displayName}
            />

            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              displayName={email}
            />

            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              displayName={password}
            />

            <FormInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              displayName={confirmPassword}
            />

            <Button type="submit" pd="15px">
              Register
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;
