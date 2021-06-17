import { Wrapper } from './Header.style';

// @ts-ignore
import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <img alt="CompanyForever" src={Logo} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
