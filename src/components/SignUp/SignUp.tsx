import { Wrapper } from "./SignUp.style";
import FormInput from "../forms/FormInput/FormInput";
import Button from "../forms/Button/Button";
import useInput from "../../hooks/useInput";
import { auth, handleUserProfile } from "../../firebase/utils";
import { useState } from "react";

const SignUp = () => {
  const displayName = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const [error, setError] = useState<string>('');

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    
    // if ( password !== confirmPassword) {
    //   setError('Password Don\'t match')
    //   return;
    // }
    // console.log(error);
    
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email.value,  password.value)
      await handleUserProfile(user)
       
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
            {/* {error.map((err: string, index: number) => {
              return ( 
              <li key={index}>
                {err}
              </li>
              )
            })} */}
            {error === '' ? error : ''}
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
