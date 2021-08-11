import { Wrapper } from './Header.style';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';
import { useTypedSelector } from '../../hooks/useTypeSelector';
// @ts-ignore
import Logo from '../../assets/logo.png';

const Header: React.FC = (props) => {
  // const user = useSelector((state: RootState) => state.user.setUser);
  const currentUser = useTypedSelector((state) => state.user.currentUser);

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
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <span onClick={() => auth.signOut()}>LogOut</span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
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
