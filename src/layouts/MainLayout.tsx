import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './Layout.style';
import firebase from 'firebase';
interface Props {
  children: JSX.Element;
  currentUser: firebase.User | null;
}

const MainLayout: React.FC<Props> = ({ children, currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser}/>
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;
