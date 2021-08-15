import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from './useTypeSelector';

const useAuth = () => {
  const currentUser = useTypedSelector(state => state.user.currentUser);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    }
  }, [history, currentUser]);

  return currentUser;
};

export default useAuth;
