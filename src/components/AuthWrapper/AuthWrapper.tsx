import { Wrapper } from './AuthWrapper.style';
import { IAuthWrapper } from '../../type/type';

const AuthWrapper: React.FC<IAuthWrapper> = ({ headline, children }) => {
  return (
    <Wrapper>
      <div className="container">
        {headline && <h2>{headline}</h2>}
        <div className="children">{children && children}</div>
      </div>
    </Wrapper>
  );
};

export default AuthWrapper;
