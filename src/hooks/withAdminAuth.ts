import useAdminAuth from './useAdminAuth';

interface Props {
  children: JSX.Element;
}

const WithAdminAuth:React.FC<Props> = props => useAdminAuth() && props.children;

export default WithAdminAuth;