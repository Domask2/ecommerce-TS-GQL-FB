import { Wrapper } from "./Header.style";
import { Link } from "react-router-dom";

// @ts-ignore
import Logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img alt="CompanyForever" src={Logo} />
          </Link>
        </div>

        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
