import { GlobalStyle, Main } from './App.style';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main>
        <Homepage />
      </Main>
    </div>
  );
};

export default App;
