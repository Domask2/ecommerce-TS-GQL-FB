import { Wrapper } from './Header.style';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { useTypedSelector } from '../../hooks/useTypeSelector';
// @ts-ignore
import Logo from '../../assets/logo.png';


const Header: React.FC = (props) => {
  const dispatch = useDispatch();
  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const signOut = () => {
    dispatch(signOutUserStart());
  }

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
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={() => signOut()}>LogOut</span>
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
