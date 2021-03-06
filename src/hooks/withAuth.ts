import useAuth from './useAuth';

const WithAuth = (props: any) => useAuth() && props.children;

export default WithAuth;
