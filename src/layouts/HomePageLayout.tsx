import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Main, Wrapper } from './Layout.style';
interface Props {
  children: JSX.Element;
}

const HomePageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default HomePageLayout;
