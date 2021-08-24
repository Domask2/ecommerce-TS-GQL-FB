import { Wrapper } from './VerticalNav.style';
import { useTypedSelector } from './../../hooks/useTypeSelector';
import UserProfile from './../UserProfile/UserProfile';

interface Props {
  children: JSX.Element;
}

const VerticalNav: React.FC<Props> = ({ children }) => {
  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const configUserProfile = {
    currentUser,
  };

  return (
    <Wrapper>
      <div className="verticalNav">
        <UserProfile {...configUserProfile} />

        <div className="menu">{children}</div>
      </div>
    </Wrapper>
  );
};

export default VerticalNav;
