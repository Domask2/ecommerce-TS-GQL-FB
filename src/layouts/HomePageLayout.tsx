import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Main, Wrapper } from "./Layout.style";

type Props = {
  children: JSX.Element
}

const HomePageLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer/>
    </Wrapper>
  );
};

export default HomePageLayout;
