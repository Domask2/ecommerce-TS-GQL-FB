import { Wrapper } from "./Header.style";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from './../../firebase/utils';
// @ts-ignore
import Logo from "../../assets/logo.png";

interface Props {
  currentUser: firebase.User | null;
}

const Header: React.FC<Props> = ({ currentUser }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img alt="CompanyForever" src={Logo} />
          </Link>
        </div>

        <div className="callToActions">

          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>
                  LogOut
                </span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
