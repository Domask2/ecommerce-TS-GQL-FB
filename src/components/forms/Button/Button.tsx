import { ButtonStyle } from './Button.style';
import { ThemeProvider } from "styled-components";

type Props = {
  type?:string
  children: any;
  otherProps?: any;
  pd?: string;
  onClick?: (e: any) => void;
};

const Button: React.FC<Props> = ({ type, children, onClick, pd, ...otherProps }) => {
  return (
    <ThemeProvider theme={{padding: `${pd ? pd : '0'}`}}>
      <ButtonStyle {...otherProps} onClick={onClick} >
      {children}
    </ButtonStyle>
    </ThemeProvider>
    
  );
};

export default Button;
