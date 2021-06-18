import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Main, Wrapper } from './Layout.style';
import firebase from 'firebase';
interface Props {
  children: JSX.Element;
  currentUser: firebase.User | null;
}

const HomePageLayout: React.FC<Props> = ({ children, currentUser }) => {
  return (
    <Wrapper>
      <Header currentUser={currentUser}/>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default HomePageLayout;
