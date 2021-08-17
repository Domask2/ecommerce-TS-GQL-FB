import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './Layout.style';

interface Props {
  children: JSX.Element;
}

const MainLayout: React.FC<Props> = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
