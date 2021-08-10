import useAuth from './useAuth';

const WithAuth = (props: any) => useAuth(props.currentUser) && props.children;

export default WithAuth;
