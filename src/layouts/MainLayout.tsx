import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
interface Props {
  children: JSX.Element;
}

const MainLayout: React.FC<Props> = (props) => {
  return (
    <div style={{display: 'flex',
      flexDirection: 'column'}}>
      <Header {...props} />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
