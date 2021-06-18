import { ButtonStyle } from './Button.style';

type Props = {
  children: any;
  otherProps: any;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick, ...otherProps }) => {
  return (
    <ButtonStyle {...otherProps} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
