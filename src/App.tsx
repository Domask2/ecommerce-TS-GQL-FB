import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//Global Style Css
import { GlobalStyle } from './App.style';
// Pages
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Recovery from './pages/Recovery/Recovery';
import Dashboard from './pages/Dashboard/Dashboard';
import Admin from './pages/Admin/Admin';
//Layout
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';
import AdminLayout from './layouts/AdminLayout';
//redux-saga
import { checkUserSession } from './redux/User/user.actions';
//hoc
import WithAuth from './hooks/withAuth';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

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
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <AdminLayout>
              <Admin />
            </AdminLayout>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
