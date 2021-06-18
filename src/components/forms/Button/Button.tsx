import { ButtonStyle } from './Button.style';

type Props = {
  children: any;
  otherProps: any;
};

const Button: React.FC<Props> = ({ children, ...otherProps }) => {
  return <ButtonStyle {...otherProps}>{children}</ButtonStyle>;
};

export default Button;
