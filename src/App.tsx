import { Route, Switch } from 'react-router-dom';
//Global Style Css
import { GlobalStyle } from './App.style';

// Pages
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
//Layout
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePageLayout>
              <Homepage />
            </HomePageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
