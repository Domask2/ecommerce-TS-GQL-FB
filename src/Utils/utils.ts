import { TUser } from '../redux/User/user.rudecer';

export const checkUserIsAdmin = (currentUser: TUser) => {
  if(!currentUser || !Array.isArray(currentUser.userRoles)) return false;

  const { userRoles } = currentUser;

  if(userRoles.includes('admin')) return true;

  return false;
}