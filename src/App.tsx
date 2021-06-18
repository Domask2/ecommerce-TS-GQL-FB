import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/utils';
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
  const [currentUser, setCurrentUser] = useState<any>(null);
  let authListener: any = null;

  useEffect(() => {
    authListener = auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) return;
      setCurrentUser(userAuth.displayName);
    });

    return () => {
      authListener();
    };
  }, [authListener]);

  console.log(currentUser);

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
