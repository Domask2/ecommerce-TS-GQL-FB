import { TUser } from '../../redux/User/user.types';
import { Wrapper } from './UserProfile.style';

interface Props {
  currentUser: TUser;
}

const UserProfile: React.FC<Props> = (props) => {
  const { currentUser } = props;
  const displayName = currentUser?.displayName;

  return (
    <Wrapper>
      <div className="userProfile">
        <ul>
          <li>
            <div className="img">
              {/* <img src={userIMG} /> */}
              Фото Клиента
            </div>
          </li>
          <li>
            <span className="displayName">{displayName && displayName}</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default UserProfile;
