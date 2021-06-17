import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./Layout.style";

interface Props {
  children: JSX.Element;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer/>
    </>
  );
};

export default MainLayout;
