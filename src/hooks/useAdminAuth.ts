import { useEffect } from "react";
import { useTypedSelector } from "./useTypeSelector";
import { useHistory } from "react-router";
import { checkUserIsAdmin } from "../Utils/utils";

const useAdminAuth = () => {
  const currentUser = useTypedSelector(state => state.user.currentUser);
  const history = useHistory();

  useEffect(() => {
    if(!checkUserIsAdmin(currentUser)) {
      history.push('/login');
    };
  }, [currentUser, history])

  return currentUser;
}

export default useAdminAuth;