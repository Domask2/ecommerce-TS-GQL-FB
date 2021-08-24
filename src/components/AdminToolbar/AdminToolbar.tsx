import { Wrapper } from './AdminToolbar.style';
import { useTypedSelector } from './../../hooks/useTypeSelector';
import { Link } from 'react-router-dom';

const AdminToolbar: React.FC = () => {
  const currentUser = useTypedSelector((state) => state.user.currentUser);

  // const isAdmin = checkUserIsAdmin(currentUser);
  // if (!isAdmin) return null;

  return (
    <Wrapper>
      <div className="adminToolbar">
        <ul>
          <li>
            <Link to="/admin">My admin</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default AdminToolbar;
