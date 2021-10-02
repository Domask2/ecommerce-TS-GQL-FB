import { Wrapper } from "./Header.style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutUserStart } from "../../redux/User/user.actions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { selectCartItemsCount } from "../../redux/Cart/cart.selectors";
// @ts-ignore
import Logo from "../../assets/logo.png";

const mapState = (state: any) => ({
  totalNumCartItems: selectCartItemsCount(state)
})

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const { totalNumCartItems } = useSelector(mapState)

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img alt="CompanyForever" src={Logo} />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">
          <ul>
            <li>
              <Link to='/cart'>
                Your Cart ({totalNumCartItems})
              </Link>
            </li>

            {currentUser && [
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>,
              <li>
                <span onClick={() => signOut()}>LogOut</span>
              </li>,
            ]}

            {!currentUser && [
              <li>
                <Link to="/registration">Register</Link>
              </li>,
              <li>
                <Link to="/login">Login</Link>
              </li>,
            ]}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
