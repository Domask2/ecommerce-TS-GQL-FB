import useAuth from "../hooks/useAuth";

const WithAuth = (props: any) => useAuth() && props.children;

export default WithAuth;