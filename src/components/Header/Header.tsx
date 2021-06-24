import { Wrapper } from "./Header.style";
import { Link } from "react-router-dom";
import { auth } from './../../firebase/utils';
import { useSelector } from "react-redux";
// @ts-ignore
import Logo from "../../assets/logo.png";


const Header: React.FC = () => {
  const User  = useSelector(state => state)
  console.log(User.currentUser);
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img alt="CompanyForever" src={Logo} />
          </Link>
        </div>

        <div className="callToActions">

          {User && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>
                  LogOut
                </span>
              </li>
            </ul>
          )}

          {!User && (
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
