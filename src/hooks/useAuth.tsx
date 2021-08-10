import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useAuth = (currentUser: any) => {
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    }
  }, [history, currentUser]);

  return currentUser;
};

export default useAuth;
