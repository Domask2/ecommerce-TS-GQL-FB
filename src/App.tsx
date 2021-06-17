import { Wrapper, GlobalStyle } from './App.style';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
};

export default App;
